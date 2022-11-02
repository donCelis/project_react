import { Link, Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import useGetData from '../hooks/useGetData'
import Loading from '../components/common/Loading'

export default function Country () {
  const { code } = useParams()

  const apiUrl = 'https://restcountries.com/v3.1/alpha/' + code

  const { data: country, loading, error } = useGetData(apiUrl)

  if (loading) return <Loading />

  if (error !== '') {
    return <Navigate to='/404' />
  }

  const { flags, name } = country[0]

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{name.common}</title>
      </Helmet>
      <section className='container py-5'>
        <Link className='btn btn-primary' to='/countries'>
          Home
        </Link>
        <article className='text-white text-center'>
          <img
            width='400px'
            src={flags.svg}
            alt={name.common}
          />
          <h1 className='mt-3'>{name.common}</h1>
        </article>
      </section>
    </>
  )
}
