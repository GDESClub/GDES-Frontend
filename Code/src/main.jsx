import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
//import { UserStateProvider } from './components/UserState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/*<UserStateProvider>
        <App />
      </UserStateProvider>*/}
        <App />
    </BrowserRouter>
  </StrictMode>,
)
