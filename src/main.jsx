// import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEyeSlash, faTrashCan, faRotateRight } from '@fortawesome/free-solid-svg-icons';

library.add( faEyeSlash, faTrashCan, faRotateRight)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
