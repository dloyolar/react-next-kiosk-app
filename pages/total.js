import { useCallback, useContext, useEffect } from 'react'
import { Layout } from '../components/layout/Layout'
import { KioskContext } from '../context/KioskProvider'

const TotalPage = () => {
  const { order } = useContext(KioskContext)

  const checkOrder = useCallback(() => {
    return order.length === 0
  }, [order])

  useEffect(() => {
    checkOrder()
  }, [order, checkOrder])

  const submitOrder = (e) => {
    e.preventDefault()

    console.log('create')
  }

  return (
    <Layout page="Total">
      <h1 className="text-4xl font-black">Daotos y Confirmar Pedido</h1>
      <p className="my-10 text-2xl">Confirma tu pedido a continuación</p>

      <form onSubmit={submitOrder}>
        <div>
          <label
            htmlFor="name"
            className="block text-xl font-bold uppercase text-slate-800"
          >
            Nombre
          </label>
          <input
            type="text"
            className="mt-3 w-full rounded bg-gray-200 p-2 lg:w-1/3"
            id="name"
          />
        </div>

        <div className="mt-10">
          <p>
            Total a Pagar: <span className="font-bold">$200</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={`${
              checkOrder()
                ? 'bg-indigo-100'
                : 'bg-indigo-600 hover:bg-indigo-800'
            } lg:w-auto" value="Confirmar Pedido w-full cursor-pointer rounded px-5 py-2 text-center font-bold
            uppercase text-white`}
            disabled={checkOrder()}
          />
        </div>
      </form>
    </Layout>
  )
}

export default TotalPage
