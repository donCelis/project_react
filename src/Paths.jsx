import { Navigate, Route, Routes } from 'react-router-dom'

/* pages */
import { RenderComp } from './components/common/RenderComp'
import FormHandle from './docs/FormHandle'
import Countries from './pages/Countries'
import Country from './pages/Country'

import Dashboard from './docs/Dashboard'
import { demoRoutes } from './config'

export default function Paths () {
  const [{ path: indexPath }] = demoRoutes
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/countries' replace />} />
      <Route path='/countries' element={<Countries />} />
      <Route path='/country/:code' element={<Country />} />
      <Route path='/404' element={<RenderComp text='Page not found' />} />
      <Route path='*' element={<Navigate to='/404' />} />
      {/* Docs */}
      <Route path='/form' element={<FormHandle />} />
      <Route path='/dashboard' element={<Dashboard />}>
        {/* <Route index element={<RenderComp text='dashboard' />} /> */}
        <Route index element={<Navigate to={indexPath} />} />
        {demoRoutes.map(({ path }, key) => (
          <Route
            key={key}
            path={path}
            element={<RenderComp text={path} />}
          />
        ))}
      </Route>
    </Routes>
  )
}
