import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GifsApp from './GifsApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsApp />
  </StrictMode>,
)
