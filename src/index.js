import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Weather from './components/weather';
import WebPage from './components/WebPage';
import Nav from './components/Nav';
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  //   <Signup/>
  // </React.StrictMode>,
  <BrowserRouter>
     <Nav/>
     <Routes>
       <Route path='/' element={<App/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/weather' element={<Weather/>}/>
       <Route path='/webpage' element={<WebPage/>}/>
       <Route path='*' element={<Navigate to="/"/>}/>
     </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
