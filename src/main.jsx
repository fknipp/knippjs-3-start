import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NumberGuessingGame from './NumberGuessingGame'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NumberGuessingGame />
  </StrictMode>,
)
