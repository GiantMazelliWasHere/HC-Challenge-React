import './Style.css'
import Cabecalho from './componentes/Cabecalho/cabecalho'
import FaixaTrilha from './componentes/FaixaTrilha/FaixaTrilha'
import Menu from './componentes/MenuDeNavegacao/Menu'
import Rodape from './componentes/Rodape/Rodape'
import Sobre from './componentes/Sobre/Sobre'

function App() {
  
  return (
    <>
      <header>
        <Cabecalho/>
        <Menu/>
        <FaixaTrilha/>
      </header>
      <body className='home'>
        <Sobre/>
      </body>
      <footer>
        <Rodape/>
      </footer>
    </>
  )
}

export default App
