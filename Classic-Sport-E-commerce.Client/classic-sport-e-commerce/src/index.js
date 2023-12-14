import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import RegistrationForm from './components/authentication/RegistrationForm';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/account/register" element={<RegistrationForm />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  root
);
