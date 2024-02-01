import { IProject } from '@/utils/types'
import { ReactNode, createContext, useState } from 'react'

export enum Status {
  Success = 'success',
  Error = 'error',
}

interface IRequestResponseModal {
  statusRequest: Status
  titleMensagem: string
}

interface ModalContextType {
  projectData: IProject | null
  deleteModalOpen: boolean
  openDeleteModal: (projectData: IProject) => void
  closeDeleteModal: () => void
  addProjectModalOpen: boolean
  openAddProjectModal: () => void
  closeAddProjectModal: () => void
  editModalOpen: boolean
  openEditModal: (projectData: IProject) => void
  closeEditModal: () => void
  viewPostModalOpen: boolean
  openViewPostModal: (projectData: IProject) => void
  closeViewPostModal: () => void
  requestResponseModalOpen: boolean
  OpenRequestResponseModal: (data: IRequestResponseModal) => void
  requestStatus: Status
  requestResponseMessage: string
  closeAllModal: () => void
}

interface ModalContextProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextType)

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [addProjectModalOpen, setAddProjectModalOpen] = useState(false)

  const [viewPostModalOpen, setViewPostModalOpen] = useState(false)
  const [requestResponseModalOpen, setRequestResponseModalOpen] =
    useState(false)
  const [projectData, setProjectData] = useState<IProject | null>(null)

  const [requestStatus, setRequestStatus] = useState<Status>(Status.Error)
  const [requestResponseMessage, setRequestResponseMessage] =
    useState<string>('')

  const closeAllModal = () => {
    setDeleteModalOpen(false)
    setEditModalOpen(false)
    setRequestResponseModalOpen(false)
    setAddProjectModalOpen(false)
    setViewPostModalOpen(false)
    setProjectData(null)
  }

  const openDeleteModal = (projectData: IProject) => {
    setDeleteModalOpen(true)
    setProjectData(projectData)
  }
  const closeDeleteModal = () => {
    setDeleteModalOpen(false)
    setProjectData(null)
  }

  const openAddProjectModal = () => setAddProjectModalOpen(true)
  const closeAddProjectModal = () => setAddProjectModalOpen(false)

  const openEditModal = (projectData: IProject) => {
    setEditModalOpen(true)
    setProjectData(projectData)
  }
  const closeEditModal = () => {
    setEditModalOpen(false)
    setProjectData(null)
  }

  const openViewPostModal = (projectData: IProject) => {
    setViewPostModalOpen(true)
    setProjectData(projectData)
  }
  const closeViewPostModal = () => {
    setViewPostModalOpen(false)
    setProjectData(null)
  }
  const OpenRequestResponseModal = ({
    statusRequest,
    titleMensagem,
  }: IRequestResponseModal) => {
    setEditModalOpen(false)
    setAddProjectModalOpen(false)
    setDeleteModalOpen(false)
    setRequestStatus(statusRequest)
    setRequestResponseMessage(titleMensagem)
    setRequestResponseModalOpen(true)
  }

  return (
    <ModalContext.Provider
      value={{
        projectData,
        deleteModalOpen,
        openDeleteModal,
        closeDeleteModal,
        addProjectModalOpen,
        openAddProjectModal,
        closeAddProjectModal,
        editModalOpen,
        openEditModal,
        closeEditModal,
        viewPostModalOpen,
        openViewPostModal,
        closeViewPostModal,
        requestResponseModalOpen,
        OpenRequestResponseModal,
        requestStatus,
        requestResponseMessage,
        closeAllModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
