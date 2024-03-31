import Cabecalho from './componentes/Cabecalho/cabecalho'
import Menu from './componentes/MenuDeNavegacao/Menu'
import Rodape from './componentes/Rodape/Rodape'
import './style.css'

function App() {

  return (
    <>
      <body className='home'>
        <Cabecalho/>
        <Menu/>
        <Sobre/>
        <Rodape/>
        
      </body>
    </>
  )
}

export default App
