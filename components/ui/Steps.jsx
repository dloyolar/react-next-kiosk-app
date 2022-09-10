import { useRouter } from 'next/router'

const steps = [
  {
    step: 1,
    name: 'Menú',
    url: '/',
  },
  {
    step: 2,
    name: 'Resumen',
    url: '/resumen',
  },
  {
    step: 3,
    name: 'Datos y Total',
    url: '/total',
  },
]

export const Steps = () => {
  const router = useRouter()

  return (
    <>
      <div className="mb-5 flex justify-between">
        {steps.map(({ name, step, url }) => (
          <button
            className="text-2xl font-bold"
            key={step}
            onClick={() => router.push(url)}
          >
            {name}
          </button>
        ))}
      </div>
    </>
  )
}
