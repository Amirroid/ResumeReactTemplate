import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './routes/home/HmePage'

createRoot(document.getElementById('root')).render(
  <HomePage />
)
