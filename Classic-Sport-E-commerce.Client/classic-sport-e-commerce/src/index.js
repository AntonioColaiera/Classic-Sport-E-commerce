import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/redux/stores/cartStore";
import "./index.css";
import App from "./App";
import RegistrationForm from "./components/authentication/RegistrationForm";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Athletics from "./components/items/Athletics";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/account/register' element={<RegistrationForm />} />
          <Route path='/sports/athletics' element={<Athletics />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  root
);
