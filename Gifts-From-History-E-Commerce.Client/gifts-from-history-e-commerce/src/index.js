import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/redux/stores/Store";
import "./index.css";
import App from "./App";
import RegistrationForm from "./components/authentication/RegistrationForm";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./components/payment/Checkout";
import Ancient from "./components/items/Ancient";

const root = document.getElementById("root");

const rootContainer = ReactDOM.createRoot(root);

rootContainer.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/account/register' element={<RegistrationForm />} />
          <Route path='/periods/ancient' element={<Ancient />} />
          <Route path='/checkout/:code' element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);
