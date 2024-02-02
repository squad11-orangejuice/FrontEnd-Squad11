/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, MouseEvent } from 'react'
import * as z from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'

import TextField from '@mui/material/TextField'

import {
  AreaButton,
  AreaCard,
  AreaForm,
  AreaImage,
  AreaInput,
  AreaModal,
  ButtonCancel,
  ProjectFormModalContainer,
  SubTitle,
  SubmitButton,
  Title,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import Autocomplete from '@mui/material/Autocomplete'
import { tags } from '@/utils/tags'
import FormHelperText from '@mui/material/FormHelperText'
import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'
import { CardAddProject } from '../CardAddProject'
import Typography from '@mui/material/Typography'
import { ITag } from '@/utils/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addProjects, updateProjects } from '@/services/api'
import axios from 'axios'
import { imageUrlToBase64 } from '@/functions/imageUrlToBase64'
import { isBase64 } from '@/functions/isBAse64'
import { Status } from '@/context/ModalContext'

type Props = {
  titleModal: string
}

const validationSchema = z.object({
  title: z.string().min(4, 'O título deve ter pelo menos 4 caracteres'),
  tags: z
    .array(z.string())
    .refine((tags) => tags.length >= 1 && tags.length <= 3, {
      message: 'Deve haver pelo menos 1 tag e no máximo 3 tags',
    }),
  link: z.string().min(4, 'O link deve ter pelo menos 4 caracteres'),
  description: z
    .string()
    .min(4, 'A descrição deve ter pelo menos 4 caracteres'),
  imagem: z.string(),
})

type FormInputs = z.infer<typeof validationSchema>

export function ProjectFormModal({ titleModal }: Props) {
  const [loading, setLoading] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [isFormValid, setIsFormValid] = useState<boolean>(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const modalContext = useOpenCloseModal()
  const {
    closeEditModal,
    projectData,
    closeAddProjectModal,
    openViewPostModal,
    OpenRequestResponseModal,
  } = modalContext

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(validationSchema),
  })

  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation({
    mutationFn: async (data: FormInputs) => {
      if (!projectData) {
        return await addProjects(data)
      }
      return await updateProjects({ id: projectData.id, ...data })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['project'] })
      setLoading(false)

      OpenRequestResponseModal({
        statusRequest: Status.Success,
        titleMensagem: !projectData
          ? 'Projeto adicionado com sucesso!'
          : 'Edição concluída com sucesso!',
      })
    },
    onError: (error) => {
      setLoading(false)
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          OpenRequestResponseModal({
            statusRequest: Status.Error,
            titleMensagem: 'Usuário não autorizado',
          })
        }
        OpenRequestResponseModal({
          statusRequest: Status.Error,
          titleMensagem: 'Algo deu errado tente novamente!',
        })
      }
      OpenRequestResponseModal({
        statusRequest: Status.Error,
        titleMensagem: 'Algo deu errado tente novamente!',
      })

      console.error('Erro desconhecido:', error)
    },
  })

  const onSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
    setLoading(true)

    if (!isBase64(data.imagem)) {
      const base64Image = await imageUrlToBase64(data.imagem)
      data.imagem = base64Image
      mutateAsync(data)
    } else {
      mutateAsync(data)
    }
  }

  const handleDivClick = () => {
    document.getElementById('fileInput')?.click()
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newImage = event.target.files?.[0]

    if (newImage) {
      const reader = new FileReader()

      reader.onloadend = () => {
        const base64Image = reader.result as string
        setPreviewImage(base64Image)
        setValue('imagem', base64Image)
      }
      reader.readAsDataURL(newImage)
    }
  }
  const handleTagsChange = (_: unknown, value: string[]) => {
    setValue('tags', value)
    setSelectedTags(value)
  }

  function handleClickClosedAllModal() {
    closeEditModal()
    closeAddProjectModal()
  }

  function extractNamesFromTags(tags: ITag[]) {
    return tags.map((tag) => tag.nome)
  }

  function handleClickPreviewPost() {
    const { title, tags, link, description, imagem } = watch()

    if (isFormValid) {
      openViewPostModal({
        data: '',
        descricao: description,
        imagem,
        link,
        tags: tags.map((tag) => {
          return { nome: tag }
        }),
        titulo: title,
        user: {
          nome: 'douglas',
          sobrenome: 'santos',
          avatar: '',
        },
      })
    }
  }

  const updateFormValidity = () => {
    const { title, tags, link, description, imagem } = watch()
    const isFormFilled =
      title.trim() !== '' &&
      tags.length > 0 &&
      link.trim() !== '' &&
      description.trim() !== '' &&
      imagem !== ''

    setIsFormValid(isFormFilled)
  }

  useEffect(() => {
    updateFormValidity()
  }, [watch()])

  useEffect(() => {
    if (projectData && projectData.imagem) {
      setValue('imagem', projectData.imagem)
      setValue('title', projectData.titulo)
      setValue('tags', extractNamesFromTags(projectData.tags))
      setValue('description', projectData.descricao)
      setValue('link', projectData.link)

      setPreviewImage(projectData.imagem)
      setSelectedTags(extractNamesFromTags(projectData.tags))
      setIsFormValid(true)
    }
  }, [projectData])

  return (
    <ProjectFormModalContainer>
      <AreaModal>
        <Title>{titleModal}</Title>
        <AreaForm onSubmit={handleSubmit(onSubmit)}>
          <AreaImage>
            <SubTitle>
              Selecione o conteúdo que você deseja fazer upload
            </SubTitle>
            <AreaCard>
              <CardAddProject
                register={register}
                handleDivClick={handleDivClick}
                handleInputChange={handleInputChange}
                previewImage={previewImage}
              />
            </AreaCard>
            {errors.imagem && (
              <Typography
                sx={{ marginLeft: '1rem', marginTop: '-13px' }}
                variant="body2"
                color="error"
              >
                Não foi possível adicionar esta imagem.
              </Typography>
            )}

            <SubTitle
              style={{
                display: 'inline-block',
                width: 'fit-content',
                cursor: isFormValid ? 'pointer' : 'not-allowed',
              }}
              onMouseEnter={(e: MouseEvent<HTMLDivElement>) =>
                (e.currentTarget.style.opacity = isFormValid ? '0.5' : '1')
              }
              onMouseLeave={(e: MouseEvent<HTMLDivElement>) =>
                (e.currentTarget.style.opacity = '1')
              }
              onClick={handleClickPreviewPost}
            >
              Visualizar publicação
            </SubTitle>
            <AreaButton>
              <SubmitButton
                type="submit"
                variant="contained"
                loading={loading}
                color="primary"
                size="large"
              >
                SALVAR
              </SubmitButton>

              <ButtonCancel
                variant="contained"
                color="primary"
                size="large"
                onClick={handleClickClosedAllModal}
              >
                CANCELAR
              </ButtonCancel>
            </AreaButton>
          </AreaImage>
          <AreaInput>
            <TextField
              sx={{ width: '100%' }}
              label="Titulo"
              type="text"
              {...register('title')}
              error={!!errors.title}
              helperText={errors.title?.message}
              defaultValue={projectData?.titulo ?? ''}
            />
            <div>
              <Autocomplete
                multiple
                id="tags-outlined"
                {...register('tags')}
                options={tags}
                getOptionLabel={(option) => option}
                value={selectedTags}
                filterSelectedOptions
                renderInput={(params) => <TextField {...params} label="Tags" />}
                onChange={handleTagsChange}
              />
              {errors.tags && (
                <FormHelperText sx={{ marginLeft: '0.8rem', color: '#d32f2f' }}>
                  Deve haver pelo menos 1 tag e no máximo 3 tags{' '}
                </FormHelperText>
              )}
            </div>

            <TextField
              sx={{ width: '100%' }}
              label="Link"
              type="text"
              {...register('link')}
              error={!!errors.link}
              helperText={errors.link?.message}
              defaultValue={projectData?.link ?? ''}
            />
            <TextField
              sx={{ width: '100%', padding: 0 }}
              label="Descrição"
              type="text"
              {...register('description')}
              id="outlined-multiline-static"
              multiline
              rows={3.8}
              error={!!errors.description}
              helperText={errors.description?.message}
              defaultValue={projectData?.descricao ?? ''}
            />
          </AreaInput>
        </AreaForm>
      </AreaModal>
    </ProjectFormModalContainer>
  )
}
