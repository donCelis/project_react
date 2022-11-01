import { Helmet } from 'react-helmet-async'
/* components */
import Card from '../components/common/Card'
import Loading from '../components/common/Loading'
/* hooks */
import useGetData from '../hooks/useGetData'

function Countries () {
  const apiUrl = 'https://restcountries.com/v3.1/all'

  const { data: countries, loading, error } = useGetData(apiUrl)

  if (loading) return <Loading />

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Countries API</title>
      </Helmet>
      <section className='container py-5'>
        <form className='mb-4'>
          <input className='form-control' type='text' placeholder='Buscar...' />
        </form>
        <div className='row gy-4'>
          {countries.map((country, index) => (
            <div key={index} className='col-12 col-md-6 col-lg-3'>
              <Card {...country} />
            </div>
          ))}
        </div>
        {error !== '' ? <p className='text-white'>{error}</p> : null}
      </section>
    </>
  )
}

export default Countries
