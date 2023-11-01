import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";
import './index.css';
import router from './pages/route/Route';
import AuthProvider from './provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-auto max-w-6xl'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
