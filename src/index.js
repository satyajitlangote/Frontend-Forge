import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ElectricityBill from './ElectricityBill';
import ProfileCard from './ProfileCard';

import FeeStatus from './FeeStatus';
import GradeCalculator from './GradeCalculator';
import ResultCard from './ResultCard';
import BackgroundColor from './BackgroundColor';
import App from './App';
import ButtonClick from './ButtonClick';
import Stopwatch from './Stopwatch';
import CounterValue from './CounterValue';
import DigitalClock from './DigitalClock';
import LoadMessage from './LoadMessage';
import Incrementor from './Incrementor';
import reportWebVitals from './reportWebVitals';
import BackgroundColors from './BackgroundColors';
import MessagePrinter from './MessagePrinter'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MessagePrinter />
    <BackgroundColors />
    <ElectricityBill />
    <ProfileCard/>
    <FeeStatus />
    <BackgroundColor />
    <ResultCard/>
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
