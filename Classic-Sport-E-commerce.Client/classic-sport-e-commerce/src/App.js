import "./App.css";

import Carousel from "./components/carousel/Carousel";
import Banners from "./components/Banners";

function App() {
  return (
    <div className='App'>
      <main>
        <Carousel/>
        <Banners />
      </main>
     
    </div>
  );
}

export default App;
