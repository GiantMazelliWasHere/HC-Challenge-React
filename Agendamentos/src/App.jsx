import './Style.css'
import Agendamentos from './componentes/Agendamentos/Agendamentos'
import Cabecalho from './componentes/Cabecalho/cabecalho'
import FaixaTrilha from './componentes/FaixaTrilha/FaixaTrilha'
import Menu from './componentes/MenuDeNavegacao/Menu'
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
        <Agendamentos/>
      </body>
      <footer>
        <Rodape/>
      </footer>
    </>
  )
}

export default App
