
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ScrollTop from './Components/ScrollTop';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <AllRoutes/>
       <ScrollTop/>
      <Footer/>
    </div>
  );
}

export default App;
