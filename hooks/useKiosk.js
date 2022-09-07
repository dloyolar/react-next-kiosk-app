import { useContext } from 'react'
import { KioskContext } from '../context/KioskProvider'

export const useKiosk = () => {
  return useContext(KioskContext)
}
