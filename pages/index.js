import { useContext } from 'react'
import { Layout } from '../components'
import { KioskContext } from '../context/KioskProvider'

export default function Home() {
  const { currentCategory } = useContext(KioskContext)

  return (
    <Layout page={`Menú ${currentCategory?.name || ''}`}>
      <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
      <p className="my-10 text-2xl">Elige y personaliza el pedido</p>
    </Layout>
  )
}
