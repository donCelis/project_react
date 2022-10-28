import useGetData from '../hooks/useGetData'
import Loading from '../components/common/Loading'

export default function Country () {
  const apiUrl = 'https://restcountries.com/v3.1/name/mexico'

  const { data: country, loading } = useGetData(apiUrl)

  if (loading) return <Loading />

  const { flags, name } = country[0]

  return (
    <section className='container py-5'>
      <article className='text-white text-center'>
        <img
          width='400px'
          src={flags.svg}
          alt={name.common}
        />
        <h1 className='mt-3'>{name.common}</h1>
      </article>
    </section>
  )
}
