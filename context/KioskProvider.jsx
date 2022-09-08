import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const KioskContext = createContext()

export const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentCategory, setCurrentCategory] = useState({})

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    setCurrentCategory(categories[0])
  }, [categories])

  const getCategories = async () => {
    const { data } = await axios('/api/categories')
    setCategories(data)
    setIsLoading(false)
  }

  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id)[0]
    setCurrentCategory(category)
  }

  return (
    <KioskContext.Provider
      value={{ categories, isLoading, currentCategory, handleClickCategory }}
    >
      {children}
    </KioskContext.Provider>
  )
}
