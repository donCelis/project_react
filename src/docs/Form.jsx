import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Form () {
  const [value, setValue] = useState('')
  const [users, setUsers] = useState([])

  const searchUsers = async () => {
    const response = await axios.get(
      `https://dummyjson.com/users/search?q=${value}&limit=10&select=firstName,image,lastName`
    )
    if (response && response.data) {
      setUsers(response?.data?.users || users)
    }
  }

  useEffect(() => {
    searchUsers()
  }, [value])

  const handleSubmit = (event) => {
    event.preventDefault()
    setValue(event.target.value)
  }

  return (
    <section className='container py-5 text-white'>
      <form>
        <input
          onChange={handleSubmit}
          className='form-control'
          type='search'
          placeholder='Search...'
        />
      </form>
      <div className='row py-4'>
        {
          users.map(({ id, image, firstName, lastName }) => (
            <div key={id} className='col-md-3'>
              <article>
                <img className='img-fluid' src={image} alt={firstName} />
                <p className='text-center'>{firstName} {lastName}</p>
              </article>
            </div>
          ))
        }
      </div>
    </section>
  )
}
