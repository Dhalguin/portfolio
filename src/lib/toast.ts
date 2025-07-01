import { DefaultToastOptions } from 'react-hot-toast'

export const toastOptions: DefaultToastOptions = {
  success: {
    style: {
      backgroundColor: '#14950f',
      color: '#ffffff',
      fontWeight: 'bold',
    },
  },
  error: {
    style: {
      backgroundColor: '#dc2626',
      color: '#ffffff',
      fontWeight: 'bold',
    },
  },
  position: 'top-right',
  duration: 3000,
}
