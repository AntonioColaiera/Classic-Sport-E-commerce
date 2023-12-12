import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Carousel from "./components/carousel/Carousel";
import Banners from "./components/Banners";

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <main>
        <Carousel/>
        <Banners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
