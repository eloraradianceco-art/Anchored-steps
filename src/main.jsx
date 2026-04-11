import React from 'react'
import ReactDOM from 'react-dom/client'
import AnchoredSteps from './App.jsx'
import ResetPassword from './ResetPassword.jsx'

const isReset = window.location.pathname === '/reset-password'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isReset ? <ResetPassword /> : <AnchoredSteps />}
  </React.StrictMode>
)
