import styled, { keyframes } from 'styled-components'
import MenuItem from '@mui/material/MenuItem'
import FileUploadIcon from '@mui/icons-material/FileUpload'

const fadeIn = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`
export const ButtonIconEdit = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  cursor: pointer;
  &:hover {
    animation: ${fadeIn} 0.3s ease;
  }
`
export const ArrowIconEdit = styled(FileUploadIcon)`
  position: absolute;
  top: 38px;
  right: 30px;
  z-index: 99;
  color: #fcfdff;
`

export const StyledMenuItem = styled(MenuItem)`
  position: absolute;
  width: 208px;
  padding: 4px;
`
