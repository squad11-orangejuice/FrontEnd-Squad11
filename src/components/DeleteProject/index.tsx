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

type Props = {
  idProject: string
  isClosed: () => void
}

export function DeleteProject({ isClosed, idProject }: Props) {
  const [loading, setLoading] = useState(false)

  function handleClosedModal() {
    isClosed()
  }

  async function handleDeleteProject() {
    setLoading(true)
    console.log(idProject)
    setLoading(false)
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
            onClick={handleClosedModal}
          >
            CANCELAR
          </ButtonCancel>
        </AreaButton>
      </AreaModal>
    </ModalDeleteContainer>
  )
}
