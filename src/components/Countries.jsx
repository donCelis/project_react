import { useEffect, useState } from 'react'
/* components */
import Loading from './common/Loading'
import Card from './common/Card'

function Countries () {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { signal, abort } = new AbortController()

  const apiUrl = 'https://restcountries.com/v3.1/all'

  const getData = async () => {
    try {
      const req = await fetch(apiUrl, { signal })
      const res = await req.json()
      setCountries(res)
    } catch (error) {
      setError(String(error))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()

    return () => abort()
  }, [])

  if (loading) return <Loading />

  return (
    <section className='container'>
      <div className='row'>
        {countries.map((country, index) => (
          <div key={index} className='col-12 col-md-6 col-lg-3'>
            <Card {...country} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Countries
