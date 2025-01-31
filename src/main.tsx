//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import "./i18n";
import { AuthProvider } from './context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>

)
