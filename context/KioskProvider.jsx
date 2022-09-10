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
  const [name, setName] = useState('')
  const [total, setTotal] = useState(0)

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    setCurrentCategory(categories[0])
  }, [categories])

  useEffect(() => {
    const newTotal = order.reduce(
      (total, product) => product.price * product.quantity + total,
      0
    )
    setTotal(newTotal)
  }, [order])

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

  const addOrder = ({ categoryId, ...product }) => {
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

  const handleEditQuantity = (id) => {
    const productUpdate = order.filter((product) => product.id === id)
    setProduct(productUpdate[0])
    setModal(!modal)
  }

  const deleteProductCart = (id) => {
    const newOrder = order.filter((product) => product.id !== id)
    setOrder(newOrder)
  }

  const submitOrder = async (e) => {
    e.preventDefault()

    console.log('create')
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
        handleEditQuantity,
        deleteProductCart,
        name,
        setName,
        total,
        submitOrder,
      }}
    >
      {children}
    </KioskContext.Provider>
  )
}
