import './Style.css'
import Cabecalho from './componentes/Cabecalho/cabecalho'
import EspacoInterativo from './componentes/EspacoInterativo/EspacoInterativo'
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
        <EspacoInterativo/>
      </body>
      <footer>
        <Rodape/>
      </footer>
    </>
  )
}

export default App
