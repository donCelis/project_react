import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { RenderComp } from './../components/common/RenderComp'

export default function RoutingDocu () {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/main' />} />
          <Route path='/main' element={<RenderComp text='Main' />} />
          <Route path='/about' element={<RenderComp text='About' />} />
          <Route path='/services' element={<RenderComp text='Services' />} />
          <Route path='/404' element={<RenderComp text='Page not found' />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </Layout>
    </>
  )
}
