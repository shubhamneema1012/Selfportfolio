import React from 'react';
import "./css/style.css";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import MyStates from './Context/Mystates';
ReactDOM.render(
  <>
  <BrowserRouter>
  <MyStates>
    <App/>
    </MyStates>
   </BrowserRouter>
  </>,
  document.getElementById("root")
)
