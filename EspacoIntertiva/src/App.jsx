import './style.css'
import Cabecalho from './componentes/Cabecalho/cabecalho'
import Menu from './componentes/MenuDeNavegacao/Menu'
import EspacoInterativo from './componentes/EspacoInterativo/EspacoInterativo'

function App() {

  return (
    <>
      <body className='home'>
        <Cabecalho/>
        <Menu/>
        <EspacoInterativo/>
        <rodape/>

      </body>
    </>
  )
}

export default App
