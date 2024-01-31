import { IProject } from '@/utils/types'
import { ReactNode, createContext, useState } from 'react'

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
  OpenRequestResponseModal: () => void
  closeRequestResponseModal: () => void
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
  const closeViewPostModal = () => setViewPostModalOpen(false)

  const OpenRequestResponseModal = () => setRequestResponseModalOpen(true)
  const closeRequestResponseModal = () => setRequestResponseModalOpen(false)

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
        closeRequestResponseModal,
        closeAllModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
