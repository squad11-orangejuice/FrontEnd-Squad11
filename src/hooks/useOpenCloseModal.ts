import { ModalContext } from '@/context/ModalContext'
import { useContext } from 'react'

export function useOpenCloseModal() {
  const context = useContext(ModalContext)
  return context
}
