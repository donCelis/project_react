import { Navigate, Route, Routes } from 'react-router-dom'

/* pages */
import { RenderComp } from './components/common/RenderComp'
import Form from './docs/Form'
import Countries from './pages/Countries'
import Country from './pages/Country'

export default function Paths () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/countries' replace />} />
      <Route path='/countries' element={<Countries />} />
      <Route path='/country/:code' element={<Country />} />
      <Route path='/404' element={<RenderComp text='Page not found' />} />
      <Route path='*' element={<Navigate to='/404' />} />
      {/* Docs */}
      <Route path='/form' element={<Form />} />
    </Routes>
  )
}
