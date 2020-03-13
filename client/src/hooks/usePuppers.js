import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const usePuppers= () => {
  const [enablePupperMode, setEnablePupperMode] = useLocalStorage('pupper')

  const isPupper = JSON.parse(localStorage.getItem('pupper'));

  useEffect(() => {
    if (isPupper === true) {
      document.body.classList.add('pupper-mode')
    } else {
      document.body.classList.remove('pupper-mode')
    }
  },[isPupper])

  return [enablePupperMode, setEnablePupperMode]
}
