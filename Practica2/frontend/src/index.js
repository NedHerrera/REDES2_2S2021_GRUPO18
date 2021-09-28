import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< Updated upstream
import App from './App';
import IngresoReporte from './Components/ingresoReporte';
=======
import ListaReporte from './Components/ListaReporte';
>>>>>>> Stashed changes
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <IngresoReporte />
=======
    <App />
>>>>>>> Stashed changes
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
