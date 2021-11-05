import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';
import Slider from './components/Home/HomeSlider/Slider';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/slider' element={<Slider/>}/>
        </Routes>
    </Router>
  );
}

export default App;
