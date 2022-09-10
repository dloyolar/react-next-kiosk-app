import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const KioskContext = createContext()

export const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentCategory, setCurrentCategory] = useState({})
  const [product, setProduct] = useState({})
  const [modal, setModal] = useState(false)
  const [order, setOrder] = useState([])

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

  const handleSetProduct = (product) => {
    setProduct(product)
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  const addOrder = ({ categoryId, image, ...product }) => {
    if (order.some((prod) => prod.id === product.id)) {
      const orderUpdate = order.map((prod) =>
        prod.id === product.id ? product : prod
      )

      setOrder(orderUpdate)
      toast.success('Guardado correctamente')
    } else {
      setOrder([...order, product])
      toast.success('Agregado al Pedido')
    }

    setModal(false)
  }

  return (
    <KioskContext.Provider
      value={{
        categories,
        isLoading,
        currentCategory,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        addOrder,
        order,
      }}
    >
      {children}
    </KioskContext.Provider>
  )
}
