import { useContext } from 'react'
import { Layout, Product } from '../components'
import { KioskContext } from '../context/KioskProvider'

export default function Home() {
  const { currentCategory } = useContext(KioskContext)

  return (
    <Layout page={`Menú ${currentCategory?.name || ''}`}>
      <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
      <p className="my-10 text-2xl">Elige y personaliza el pedido</p>

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 2xl:grid-cols-4">
        {currentCategory?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  )
}
