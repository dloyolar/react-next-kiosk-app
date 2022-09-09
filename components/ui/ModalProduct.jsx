/* eslint-disable react/no-unknown-property */
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { KioskContext } from '../../context/KioskProvider'
import { priceFormat } from '../../helpers'

export const ModalProduct = () => {
  const [quantity, setQuantity] = useState(1)
  const { product, handleChangeModal, addOrder, order } =
    useContext(KioskContext)
  const [editing, setEditing] = useState(false)

  const { image, price, name } = product

  const increaseBy = (value) => {
    const newValue = Math.max(quantity + value, 1)
    setQuantity(newValue)
  }

  useEffect(() => {
    if (order.some((prod) => prod.id === product.id)) {
      const productEditing = order.find((prod) => prod.id === product.id)
      setEditing(true)
      setQuantity(productEditing.quantity)
    }
  }, [product, order])

  return (
    <div className="gap-10 md:flex">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${image}.jpg`}
          alt={`imagen product ${name}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="mt-5 text-3xl font-bold">{name}</h1>
        <p className="mt-5 text-5xl font-black text-amber-500">
          {priceFormat(price)}
        </p>

        <div className="mt-5 flex gap-4">
          <button type="button" onClick={() => increaseBy(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p className="text-3xl">{quantity}</p>
          <button type="button" onClick={() => increaseBy(1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="mt-5 rounded bg-indigo-600 px-5 py-2 font-bold uppercase text-white hover:bg-indigo-800"
          onClick={() => addOrder({ ...product, quantity })}
        >
          {editing ? 'Guardar cambios' : ' Añadir al Pedido'}
        </button>
      </div>
    </div>
  )
}
