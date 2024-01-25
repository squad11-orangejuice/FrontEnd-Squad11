import { ReactNode, createContext, useState } from 'react'

interface ModalContextType {
  deleteModalOpen: boolean
  openDeleteModal: () => void
  closeDeleteModal: () => void
  editModalOpen: boolean
  openEditModal: () => void
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

  const openDeleteModal = () => setDeleteModalOpen(true)
  const closeDeleteModal = () => setDeleteModalOpen(false)

  const openEditModal = () => setEditModalOpen(true)
  const closeEditModal = () => setEditModalOpen(false)

  const openViewPostModal = () => setViewPostModalOpen(true)
  const closeViewPostModal = () => setViewPostModalOpen(false)

  return (
    <ModalContext.Provider
      value={{
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
