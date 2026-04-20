import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global_styles.css'
import RootApplication from './RootApplication.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootApplication />
  </StrictMode>,
)
