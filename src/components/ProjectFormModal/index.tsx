/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
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

type Props = {
  titleModal: string
}

const validationSchema = z.object({
  title: z.string().min(4, 'O título deve ter pelo menos 4 caracteres'),
  tags: z.array(z.string()),
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
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const modalContext = useOpenCloseModal()
  const { closeEditModal, projectData, closeAddProjectModal } = modalContext

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setLoading(true)
    console.log('Dados enviados:', data)
    setLoading(false)
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

  useEffect(() => {
    if (projectData && projectData.url) {
      console.log(projectData.url)
      setValue('imagem', projectData.url)
      setValue('title', projectData.title)
      setValue('tags', projectData.tags)
      setValue('description', projectData.description)
      setValue('link', projectData.linkProject)

      setPreviewImage(projectData.url)
      setSelectedTags(projectData.tags)
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

            <SubTitle>Visualizar publicação</SubTitle>
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
              defaultValue={projectData?.title ?? ''}
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
                  Deve selecionar pelo menos 1 tag
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
              defaultValue={projectData?.linkProject ?? ''}
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
              defaultValue={projectData?.description ?? ''}
            />
          </AreaInput>
        </AreaForm>
      </AreaModal>
    </ProjectFormModalContainer>
  )
}
