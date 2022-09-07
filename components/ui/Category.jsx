import Image from 'next/image'

export const Category = ({ category }) => {
  const { name, icon, id } = category
  return (
    <div className="flex w-full items-center gap-4 border p-5 hover:bg-amber-400">
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
