import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import RegistrationForm from './components/authentication/RegistrationForm';
import Header from './components/Header';
import Navbar from './components/Navbar';


const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
      
        <Route path="/" element={<App />} />
        <Route path="/account/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  root
);
