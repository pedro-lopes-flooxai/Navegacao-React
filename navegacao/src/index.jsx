import './index.css'
import {createRoot} from 'react-dom/client';
import App from './views/examples/App'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<h1><App/></h1>);