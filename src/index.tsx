import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

interface AppStateValue {
  username: string,
  shoppingCar: { item: { id: number, name: string }[] }
}

const defaultContextValue: AppStateValue = {
  username: '',
  shoppingCar: { item: [] }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
