import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// 3. BOOTSTRAP ICONS (ADD THIS LINE)
import 'bootstrap-icons/font/bootstrap-icons.css';

// 4. Global Styles
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)