import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

export default function FormHandle () {
  const [users, setUsers] = useState([])

  const inputRef = useRef()

  const searchUsers = async (url = '') => {
    const response = await axios.get(url)
    if (response && response.data) {
      setUsers(response?.data?.users || users)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const searchUser = `https://dummyjson.com/users/search?q=${inputRef.current.value}&limit=10&select=firstName,image,lastName`
    searchUsers(searchUser)
  }

  useEffect(() => {
    const getUsers =
      'https://dummyjson.com/users?limit=10&select=firstName,image,lastName'
    searchUsers(getUsers)
  }, [])

  return (
    <section className='container py-5 text-white'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            className='form-control'
            type='search'
            name='search'
            ref={inputRef}
          />
          <button className='btn btn-primary'>Search</button>
        </div>
      </form>
      <div className='row py-4'>
        {users.map(({ id, image, firstName, lastName }) => (
          <div key={id} className='col-md-3'>
            <article>
              <img className='img-fluid' src={image} alt={firstName} />
              <p className='text-center'>
                {firstName} {lastName}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
