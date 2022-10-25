import { useEffect, useState } from 'react'
import '../styles/App.css'

const App = () => {
  /* reglas básicas de los hooks */
  /*
    1. Se deben en la cabecera del componente
    2. No se pueden llamar dentro de condicionales, ciclos o scopes
  */
  const [username, setUserName] = useState('Bruno')

  const handleChangeName = () => setUserName('Jared')

  useEffect(() => {
    handleChangeName()
  })

  return (
    <div className='App'>
      <h2>{username}</h2>
      {/* <button onClick={handleChangeName}>Cambiar</button> */}
    </div>
  )
}

export default App
