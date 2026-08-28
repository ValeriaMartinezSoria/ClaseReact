import {createRoot} from 'react-dom/client';
import TresEnRaya from '../../contador/src/tres-en-raya.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TresEnRaya />);