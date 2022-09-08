/* eslint-disable react/no-unknown-property */
import Image from 'next/image'
import { useContext } from 'react'
import { KioskContext } from '../../context/KioskProvider'
import { priceFormat } from '../../helpers'

export const ModalProduct = () => {
  const { product, handleChangeModal } = useContext(KioskContext)

  const { image, price, name } = product

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
      </div>
    </div>
  )
}
