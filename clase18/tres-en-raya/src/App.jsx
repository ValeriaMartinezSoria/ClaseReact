import { createRoot } from 'react-dom/client';
import './index.css';
import TresEnRaya from './TresEnRaya.tsx';

const container = document.getElementById('root');

if (!container) {
  throw new Error('No se encontró el contenedor #root');
}

createRoot(container).render(<TresEnRaya />);