// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* styles */
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
/* components */
import Countries from './components/Countries'

const root = document.getElementById('root')

createRoot(root).render(<Countries />)
