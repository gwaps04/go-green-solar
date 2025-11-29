import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Import Bootstrap JS (For dropdowns to click/open)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// 3. Import Global Styles (Our custom gradient and font)
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)