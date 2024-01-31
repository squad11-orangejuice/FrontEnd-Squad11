import { useState } from 'react'
import {
  AreaButton,
  AreaModal,
  ButtonCancel,
  ButtonDelete,
  ModalDeleteContainer,
  SubTitle,
  Title,
} from './styles'
import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteProjects } from '@/services/api'
import axios from 'axios'
import { Status } from '@/context/ModalContext'

export function DeleteProjectModal() {
  const [loading, setLoading] = useState(false)

  const queryClient = useQueryClient()

  const modalContext = useOpenCloseModal()
  const { closeDeleteModal, projectData, OpenRequestResponseModal } =
    modalContext

  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      setLoading(true)

      if (projectData && projectData.id) {
        return await deleteProjects(projectData.id)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['project'] })
      setLoading(false)
      OpenRequestResponseModal({
        statusRequest: Status.Success,
        titleMensagem: 'Projeto deletado com sucesso!',
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
        } else {
          console.log(error)
          OpenRequestResponseModal({
            statusRequest: Status.Error,
            titleMensagem: 'Algo deu errado tente novamente!',
          })
        }
      }
      OpenRequestResponseModal({
        statusRequest: Status.Error,
        titleMensagem: 'Algo deu errado tente novamente!',
      })

      console.error('Erro desconhecido:', error)
    },
  })

  return (
    <ModalDeleteContainer>
      <AreaModal>
        <Title>Deseja Excluir?</Title>
        <SubTitle>
          Se você prosseguir irá excluir o projeto do seu portfólio
        </SubTitle>
        <AreaButton>
          <ButtonDelete
            variant="contained"
            loading={loading}
            color="primary"
            size="large"
            onClick={() => mutateAsync()}
          >
            EXCLUIR
          </ButtonDelete>
          <ButtonCancel
            variant="contained"
            color="error"
            size="large"
            onClick={() => closeDeleteModal()}
          >
            CANCELAR
          </ButtonCancel>
        </AreaButton>
      </AreaModal>
    </ModalDeleteContainer>
  )
}
