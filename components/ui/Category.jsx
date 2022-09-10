import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { KioskContext } from '../../context/KioskProvider'

export const Category = ({ category }) => {
  const router = useRouter()
  const { currentCategory, handleClickCategory } = useContext(KioskContext)
  const { name, icon, id } = category

  const toHome = () => {
    if (router.pathname !== '/') router.push('/')
  }

  return (
    <div
      className={`${
        currentCategory?.id === id && 'bg-amber-400'
      } flex w-full items-center gap-4 border p-5 hover:cursor-pointer hover:bg-amber-400`}
      onClick={() => {
        handleClickCategory(id)
        toHome()
      }}
    >
      <Image
        alt="Imagen Icono"
        width={70}
        height={70}
        src={`/assets/img/icono_${icon}.svg`}
      />
      <button type="button" className="text-2xl font-bold hover:cursor-pointer">
        {name}
      </button>
    </div>
  )
}
