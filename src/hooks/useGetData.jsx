import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function useGetData (apiUrl) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  // const { signal, abort } = new AbortController()

  const getData = async () => {
    try {
      const req = await fetch(apiUrl)
      // const req = await fetch(apiUrl, { signal })
      req.status === 200 && setData(await req.json())
      req.status === 404 && setError(req.message)
    } catch (error) {
      setError(String(error))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()

    /* return () => abort() */
  }, [apiUrl])

  useEffect(() => {
    if (error !== '') toast.error(error)
  }, [error])

  return { data, loading, error }
}
