import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import App2 from './App2'
import App3 from './App3'
import Holy from './Holy'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Holy/> 
    {/* <App/> */}
    {/* <App2/> */}
    {/* <App3/> */}
  </React.StrictMode>,
)
