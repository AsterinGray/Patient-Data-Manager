type Theme = 'light' | 'dark' | 'colored';
type ToastPosition = 'top-right' | 'top-center' |
  'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';

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