import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css';
import { App } from './app.tsx';

const root = createRoot(document.querySelector('#root') as Element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
