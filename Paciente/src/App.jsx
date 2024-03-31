import './style.css'
import Cabecalho from './componentes/Cabecalho/cabecalho'
import Menu from './componentes/MenuDeNavegacao/Menu'
import Pacientes from './componentes/Pacientes/Pacientes'
import Rodape from './componentes/Rodape/Rodape'

function App() {

  return (
    <>
      <body className='home'>
        <Cabecalho/>
        <Menu/>
        <Pacientes/>
        <Rodape/>
        
      </body>
    </>
  )
}

export default App
