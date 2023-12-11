import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Carousel from "./components/carousel/Carousel";
function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <main>
        <Carousel/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
