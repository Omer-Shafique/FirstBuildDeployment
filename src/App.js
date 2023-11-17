
import './App.css';
import Navigation from './Costumer/Component/Navbar/Navbar';
import MainCarousel from './Costumer/Component/HomeCarousel/MainCarousel'
import Homepage from './Costumer/Pages/Homepage/Homepage';
function App() {
  return (
    <>
    <div>
      <Navigation/>
    </div>

    <div className="App">
      <Homepage/>
    </div>
    </>
  );
}

export default App;
