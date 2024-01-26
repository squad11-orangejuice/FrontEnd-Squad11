import { ReactNode, createContext, useState } from 'react'

interface ProjectData {
  title: string
  tags: string[]
  linkProject: string
  url: string
  description: string
}

interface ModalContextType {
  projectData: ProjectData | null
  deleteModalOpen: boolean
  openDeleteModal: () => void
  closeDeleteModal: () => void
  editModalOpen: boolean
  openEditModal: (projectData: ProjectData) => void
  closeEditModal: () => void
  viewPostModalOpen: boolean
  openViewPostModal: () => void
  closeViewPostModal: () => void
}

interface ModalContextProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextType)

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [viewPostModalOpen, setViewPostModalOpen] = useState(false)
  const [projectData, setProjectData] = useState<ProjectData | null>(null)

  const openDeleteModal = () => setDeleteModalOpen(true)
  const closeDeleteModal = () => setDeleteModalOpen(false)

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
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
