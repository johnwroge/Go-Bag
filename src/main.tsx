import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import App2 from './App2'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
    <App2/>
  </React.StrictMode>,
)
