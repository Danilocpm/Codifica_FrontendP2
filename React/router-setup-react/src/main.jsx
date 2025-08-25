import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FetchUser from './components/FetchUser.jsx'
import UserInterceptor from './components/UserInterceptor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserInterceptor />
  </StrictMode>,
)
