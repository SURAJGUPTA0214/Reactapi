import React from 'react';
import ReactDOM from 'react-dom';
import About from './Route/About';
import Career from './Route/Career';
import Contact from './Route/Contact';
import { BrowserRouter, Route, Link, Router, Switch } from "react-router-dom";
import App from './App';
import PostApi from './PostApi';
import RegsApi from './RegsApi';
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
  <>
  <BrowserRouter>
      <App />
   </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

