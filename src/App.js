import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Order from './components/Order/Order';


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Order/>
    </div>
  );
}

export default App;
