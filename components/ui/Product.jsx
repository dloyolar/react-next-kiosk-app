import Image from 'next/image'
import { useContext } from 'react'
import { KioskContext } from '../../context/KioskProvider'
import { priceFormat } from '../../helpers'

export const Product = ({ product }) => {
  const { handleSetProduct, handleChangeModal } = useContext(KioskContext)
  const { name, price, image } = product

  return (
    <div className="border p-3">
      <Image
        width={400}
        height={500}
        src={`/assets/img/${image}.jpg`}
        alt={`Imagen de opción ${name}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 text-4xl font-black text-amber-500">
          {priceFormat(price)}
        </p>

        <button
          type="button"
          className="mt-5 w-full rounded bg-indigo-600 p-3 font-bold uppercase text-white hover:bg-indigo-800"
          onClick={() => {
            handleSetProduct(product)
            handleChangeModal()
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  )
}
