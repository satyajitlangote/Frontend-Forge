import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ButtonClick from './ButtonClick';
import Stopwatch from './Stopwatch';
import CounterValue from './CounterValue';
import DigitalClock from './DigitalClock';
import LoadMessage from './LoadMessage';
import Incrementor from './Incrementor';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Stopwatch />
    <CounterValue/>
    <ButtonClick />
    <DigitalClock />  
    <LoadMessage />
  <Incrementor />
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
