import Head from 'next/head'
import { Sidebar } from '../ui/Sidebar'

export const Layout = ({ children, page }) => {
  return (
    <>
      <Head>
        <title>Café - {page}</title>
        <meta name="description" content="Kiosk Coffee" />
      </Head>

      <div className="md:flex">
        <aside className="2xl:1/5 md:w-4/12 xl:w-1/4">
          <Sidebar />
        </aside>
        <main className="2xl:4/5 h-screen overflow-y-scroll md:w-8/12 xl:w-3/4">
          <div className="p-10">{children}</div>
        </main>
      </div>
    </>
  )
}
