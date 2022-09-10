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

  const calculateProgress = () => {
    let value
    if (router.pathname === '/') {
      value = 2
    } else if (router.pathname === '/resumen') {
      value = 50
    } else {
      value = 100
    }
    return value
  }

  return (
    <>
      <div className="mb-5 flex justify-between">
        {steps.map(({ name, step, url }) => (
          <button
            className="text-2xl font-bold"
            key={step}
            onClick={() => {
              router.push(url)
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="mb-10 bg-gray-100">
        <div
          className="h-2 w-10 rounded-full  bg-amber-500 text-center text-xs leading-none text-white"
          style={{
            width: `${calculateProgress()}%`,
          }}
        ></div>
      </div>
    </>
  )
}
