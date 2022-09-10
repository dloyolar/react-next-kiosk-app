import { useContext } from 'react'
import Head from 'next/head'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Sidebar } from '../ui/Sidebar'
import { KioskContext } from '../../context/KioskProvider'
import { ModalProduct } from '../ui/ModalProduct'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#__next')

export const Layout = ({ children, page }) => {
  const { modal } = useContext(KioskContext)

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

      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProduct />
        </Modal>
      )}

      <ToastContainer />
    </>
  )
}
