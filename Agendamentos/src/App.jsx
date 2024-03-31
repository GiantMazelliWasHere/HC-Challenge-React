import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import Menu from './componentes/MenuDeNavegacao/Menu'
import Cabecalho from './componentes/Cabecalho/cabecalho'
import Agendamentos from './componentes/Agendamentos/Agendamentos'
import Rodape from './componentes/Rodape/Rodape'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho/>
      <Menu/>
      <Agendamentos/>
      <Rodape/>
    </>
  )
}

export default App
