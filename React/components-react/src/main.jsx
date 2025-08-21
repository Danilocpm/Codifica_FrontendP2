import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import Greetings from './components/Greetings.jsx'
import Aplicativo from './components/Produto.jsx'
import ClassComponent from './components/ClassComponent.jsx'
import LifeCycleClassComponent from './components/LifeCycleClassComponent.jsx'
import LifeCycleFunctionalComponent from './components/LifeCycleFunctionalComponent.jsx'
import SearchComponent from './components/desafio.jsx'
import ViaCepFunctional from './components/desafioCorrigido.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViaCepFunctional cep={65091020}/>
  </StrictMode>,
)
