// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
/* styles */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'
import './styles/index.css'
import RoutingDocu from './docs/RoutingDocu'
/* components */
// import Countries from './components/Countries'

const root = document.getElementById('root')

createRoot(root).render(
  <>
    {/* <Countries /> */}
    {/* <ToastContainer /> */}
    <BrowserRouter>
      <RoutingDocu />
    </BrowserRouter>
  </>
)
