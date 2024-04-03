import './Style.css'
import Cabecalho from './componentes/Cabecalho/cabecalho'
import FaixaTrilha from './componentes/FaixaTrilha/FaixaTrilha'
import Menu from './componentes/MenuDeNavegacao/Menu'
import Pacientes from './componentes/Pacientes/Pacientes'
import Rodape from './componentes/Rodape/Rodape'

function App() {

  return (
    <>
      <header>
        <Cabecalho/>
        <Menu/>
        <FaixaTrilha/>
      </header>
      <body className='home'>
        <Pacientes/>
      </body>
      <footer>
        <Rodape/>
      </footer>
    </>
  )
}

export default App
