import React from "react";
import ReactDOM from "react-dom";
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
import Prehistory from "./components/items/Periods/Prehistory";
import Ancient from "./components/items/Periods/Ancient";
import Medieval from "./components/items/Periods/Medieval";
import Modern from "./components/items/Periods/Modern";
import Contemporary from "./components/items/Periods/Contemporary";
import MartinLuther from "./components/items/HistoricCharacters/MartinLuther";
import DavidLivingston from "./components/items/HistoricCharacters/DavidLivingston";
import Dinosaurs from "./components/items/HistoricCharacters/Dinosaurs";
import Socrates from "./components/items/HistoricCharacters/Socrates";
import SteamEngine from "./components/items/EventsAndObjects/SteamEngine";
import Hat from "./components/items/ProductTipology/Hat";
import Poster from "./components/items/ProductTipology/Poster";
import Sculpture from "./components/items/ProductTipology/Sculpture";
import T_shirt from "./components/items/ProductTipology/T_shirt";
import InfoBar from "./components/InfoBar";

const root = document.getElementById("root");

const rootContainer = ReactDOM.createRoot(root);

rootContainer.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* Display InfoBar component */}
        <InfoBar />
        <Header />
        <Navbar />
        <Routes>
          {/* Define routes for different pages */}
          <Route path='/' element={<App />} />
          <Route path='/account/register' element={<RegistrationForm />} />
          <Route path='/checkout/:code' element={<Checkout />} />
          <Route path='/periods/prehistory' element={<Prehistory />} />
          <Route path='/periods/ancient' element={<Ancient />} />
          <Route path='/periods/medieval' element={<Medieval />} />
          <Route path='/periods/modern' element={<Modern />} />
          <Route path='/periods/contemporary' element={<Contemporary />} />
          <Route
            path='/historic_characters/Martin_Luther'
            element={<MartinLuther />}
          />
          <Route
            path='/historic_characters/David_Livingston'
            element={<DavidLivingston />}
          />
          <Route
            path='/historic_characters/dinosaurs'
            element={<Dinosaurs />}
          />
          <Route path='/historic_characters/Socrates' element={<Socrates />} />
          <Route
            path='/events_and_objects/steam_engine'
            element={<SteamEngine />}
          />
          <Route path='/product_tipology/sculpture' element={<Sculpture />} />
          <Route path='/product_tipology/poster' element={<Poster />} />
          <Route path='/product_tipology/t-shirt' element={<T_shirt />} />
          <Route path='/product_tipology/hat' element={<Hat />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);
