import Image from 'next/image'
import { useContext } from 'react'
import { KioskContext } from '../../context/KioskProvider'
import { Category } from './Category'

export const Sidebar = () => {
  const { categories, isLoading } = useContext(KioskContext)

  return (
    <>
      <Image width={300} height={100} src="/assets/img/logo.svg" alt="logo" />

      <nav className="mt-10">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </nav>
    </>
  )
}
