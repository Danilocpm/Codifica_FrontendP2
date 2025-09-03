import './styles/base.css'
import './styles/utilities.css'
import './styles/components.css'
import { Button } from './components/button/button'
import { Card } from './components/card/card'

import { ButtonModuleExample } from './components/button/ButtonModuleExample'

import { Themed } from './components/button/ButtonStyled'
import { GlobalStyle } from './theme/GlobalStyle'
import { ButtonStyled } from './components/button/ButtonStyled'

function App() {


  return (
    <>
      <main className='container'>  
          <Card title="Css - Exemplo Global"> 
            <p>Estilos vindos de Css Global / Arquivos Globais</p>
          <Button>Enviar</Button>
          <ButtonModuleExample>Enviar Mensagem</ButtonModuleExample>
          <ButtonStyled variant='ghost'>Ghost</ButtonStyled>
          </Card>
      </main>
    </>
  )
}

export default App
