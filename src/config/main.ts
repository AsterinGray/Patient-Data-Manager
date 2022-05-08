import { toast } from 'react-toastify'

export const TOKEN_NAME = process.env.NEXT_PUBLIC_TOKEN_NAME || 'PDM_TOKEN'

export const toastConfig = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: 'colored',
}