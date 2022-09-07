import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const KioskContext = createContext()

export const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const { data } = await axios('/api/categories')
    setCategories(data)
    setIsLoading(false)
  }

  return (
    <KioskContext.Provider value={{ categories, isLoading }}>
      {children}
    </KioskContext.Provider>
  )
}
