import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/Header.css'
import './css/Home.css'
import './css/Lutadores.css'
import './css/AdicionarLutador.css'
import './css/Eventos.css'
import './css/IndividualMateria.css'
import './css/IndividualLutador.css'
import './css/WWE.css'
import './css/Login.css'
import './css/Register.css'
import './css/AdminPage.css'




import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)