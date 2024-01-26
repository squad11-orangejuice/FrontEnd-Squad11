import { ReactNode, createContext, useState } from 'react'

interface ProjectData {
  id: string
  title: string
  tags: string[]
  linkProject: string
  url: string
  description: string
}

interface ModalContextType {
  projectData: ProjectData | null
  deleteModalOpen: boolean
  openDeleteModal: (projectData: ProjectData) => void
  closeDeleteModal: () => void
  editModalOpen: boolean
  openEditModal: (projectData: ProjectData) => void
  closeEditModal: () => void
  viewPostModalOpen: boolean
  openViewPostModal: () => void
  closeViewPostModal: () => void
  requestSucessModalOpen: boolean
  OpenRequestSucessModal: () => void
  closeRequestSucessModal: () => void
}

interface ModalContextProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextType)

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [viewPostModalOpen, setViewPostModalOpen] = useState(false)
  const [requestSucessModalOpen, setRequestSucessModalOpen] = useState(false)
  const [projectData, setProjectData] = useState<ProjectData | null>(null)

  const openDeleteModal = (projectData: ProjectData) => {
    setDeleteModalOpen(true)
    setProjectData(projectData)
  }
  const closeDeleteModal = () => {
    setDeleteModalOpen(false)
    setProjectData(null)
  }

  const openEditModal = (projectData: ProjectData) => {
    setEditModalOpen(true)
    setProjectData(projectData)
  }
  const closeEditModal = () => {
    setEditModalOpen(false)
    setProjectData(null)
  }

  const openViewPostModal = () => setViewPostModalOpen(true)
  const closeViewPostModal = () => setViewPostModalOpen(false)

  const OpenRequestSucessModal = () => setRequestSucessModalOpen(true)
  const closeRequestSucessModal = () => setRequestSucessModalOpen(false)

  return (
    <ModalContext.Provider
      value={{
        projectData,
        deleteModalOpen,
        openDeleteModal,
        closeDeleteModal,
        editModalOpen,
        openEditModal,
        closeEditModal,
        viewPostModalOpen,
        openViewPostModal,
        closeViewPostModal,
        requestSucessModalOpen,
        OpenRequestSucessModal,
        closeRequestSucessModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
