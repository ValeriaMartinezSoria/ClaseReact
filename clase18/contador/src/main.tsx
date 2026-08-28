import { createRoot } from 'react-dom/client'
import './index.css'
import Contador from './contador.tsx'
import EjemploLlave from './ejemploLlave.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <EjemploLlave />
    <Contador />
  </>
)