import { useEffect, useState } from 'react'
import '../styles/App.css'

const App = () => {
  console.log('Montaje')
  /* reglas básicas de los hooks */
  /*
    1. Se deben en la cabecera del componente
    2. No se pueden llamar dentro de condicionales, ciclos o scopes
  */
  const [username, setUserName] = useState('Bruno')
  const [number, setNumber] = useState(0)

  const handleChangeName = () => {
    setUserName('Jared') /* no se ejecuta la segunda vez */
  }

  /* siempre se ejecuta */
  /* useEffect(() => {
    handleChangeName()
    console.log('Update')
  }) */

  /* se ejecuta una sola vez */
  /* useEffect(() => {
    number === 0 && console.log('useEffect')
    if (number === 0) console.log('useEffect')
  }, []) */

  const productCount = 10
  /* se ejecuta cuando detecta el cambio en un estado especifico */
  /* useEffect(() => {
    console.log('Cambio de numero')
    number === productCount && window.alert('Ya no hay productos')
  }, [number]) */

  /* se ejecuta un fragmento de código cuando se desmontan el componente */
  /* useEffect(() => {
    return () => {
      console.log('Unmount')
    }
  }, []) */

  return (
    <div className='App'>
      <h2>{number}</h2>
      {/* <button onClick={() => setNumber(number < productCount ? number + 1 : number)}>Cambiar</button> */}
      <button onClick={() => number < productCount && setNumber(number + 1)}>Cambiar</button>
    </div>
  )
}

export default App
