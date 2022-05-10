import { Theme, ToastPosition } from 'react-toastify'

export type toastConfigType = {
  position: ToastPosition,
  autoClose: number,
  hideProgressBar: boolean,
  closeOnClick: boolean,
  pauseOnHover: boolean,
  draggable: boolean,
  progress: undefined,
  theme: Theme,
}