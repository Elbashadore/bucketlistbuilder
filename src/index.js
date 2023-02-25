import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchBar from './navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


ReactDOM.render(
    <div>
      <App />
    </div>,
  document.getElementById('root')
);

reportWebVitals();
