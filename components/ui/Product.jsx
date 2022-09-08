import Image from 'next/image'
import { priceFormat } from '../../helpers'

export const Product = ({ product }) => {
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
      </div>
    </div>
  )
}
