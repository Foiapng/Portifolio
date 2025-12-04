import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routers.jsx';
import './styles/index.css'
import App from './Home.jsx'
import Games from './Games.jsx'
import WebDesign from './WebDesign.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </StrictMode>,
)


