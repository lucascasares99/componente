import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Titulo } from './componente/Titulo'
import { Suma } from './componente/Suma'
import { Tituloalternativo } from './componente/Tituloalternativo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Titulo titulo={"componente"} />
    <Suma number1={1} number2={3} />
   <Tituloalternativo condicion={true}/>
    </>
  )
}

export default App
