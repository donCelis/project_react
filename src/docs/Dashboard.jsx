import { Link, Outlet } from 'react-router-dom'
import { demoRoutes } from '../config'

export default function Dashboard () {
  return (
    <section className='container-fluid'>
      <div className='row vh-100'>
        <div className='col-md-3 bg-light'>
          <aside className='list-group py-4'>
            {demoRoutes.map((a, key) => (
              <Link
                key={key}
                className='list-group-item'
                to={`/dashboard/${a.path}`}
              >
                {a.path}
              </Link>
            ))}
          </aside>
        </div>
        <div className='col-md-9'>
          <main className='p-4 text-white'>
            <Outlet />
          </main>
        </div>
      </div>
    </section>
  )
}
