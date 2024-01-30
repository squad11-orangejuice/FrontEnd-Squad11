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

export function DeleteProjectModal() {
  const [loading, setLoading] = useState(false)

  const modalContext = useOpenCloseModal()
  const { closeDeleteModal, OpenRequestSucessModal } = modalContext

  async function handleDeleteProject() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      OpenRequestSucessModal()
    }, 2000)
  }

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
            onClick={handleDeleteProject}
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
