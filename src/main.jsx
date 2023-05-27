import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './Routes/Router.jsx'
import AuthProvider from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-auto max-w-6xl'>
    <React.StrictMode>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
)
