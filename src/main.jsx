import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './Routes/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-auto max-w-6xl'>
    <React.StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </React.StrictMode>
  </div>
)
