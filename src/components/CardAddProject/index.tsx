/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from 'react-hook-form'

import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'

import {
  ImageInput,
  InputImage,
  TextImageInput,
  TitleImageInput,
} from './styles'
import { useTheme } from 'styled-components'

interface CardAddProjectProps {
  register?: UseFormRegister<any>
  handleDivClick: () => void
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  previewImage?: string | null
  title?: string
}

export function CardAddProject({
  register,
  handleDivClick,
  handleInputChange,
  previewImage,
  title,
}: CardAddProjectProps) {
  const theme = useTheme()
  return (
    <InputImage
      onClick={handleDivClick}
      style={{
        padding: previewImage ? '0' : '0 8px',
        backgroundColor: previewImage
          ? theme.colors['$color-neutral-60']
          : theme.colors['$color-neutral-70'],
      }}
    >
      {register && (
        <>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            {...register('imagem', { required: true })}
            onChange={handleInputChange}
            style={{ display: 'none' }}
          />
        </>
      )}

      {!previewImage && (
        <>
          <PhotoLibraryIcon sx={{ fontSize: 46 }} />
          {title && (
            <TitleImageInput>Adicione seu primeiro projeto</TitleImageInput>
          )}
          <TextImageInput>
            Compartilhe seu talento com milhares de pessoas
          </TextImageInput>
        </>
      )}

      {previewImage && <ImageInput src={previewImage} alt="Prévia da imagem" />}
    </InputImage>
  )
}
