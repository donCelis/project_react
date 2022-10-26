import { useEffect, useState } from 'react'

export default function Counter () {
  console.log('Render')
  const [number, setNumber] = useState(0)

  useEffect(() => {
    return () => {
      console.log('Unmount')
    }
  }, [])
  return (
    <article>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </article>
  )
}
