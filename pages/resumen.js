import { useContext } from 'react'
import { OrderResume } from '../components'
import { Layout } from '../components/layout/Layout'
import { KioskContext } from '../context/KioskProvider'

const ResumenPage = () => {
  const { order } = useContext(KioskContext)

  return (
    <Layout page="Resumen">
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="my-10 text-2xl">Revisa tu Pedido</p>

      {order.length === 0 ? (
        <p className="text-center text-2xl">No hay elementos en tu pedido</p>
      ) : (
        order.map((product) => (
          <OrderResume key={product.id} product={product} />
        ))
      )}
    </Layout>
  )
}

export default ResumenPage
