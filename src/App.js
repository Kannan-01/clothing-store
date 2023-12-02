import { Route , Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Wishlist from './Pages/WishList'
import Header from './Components/Header';
import Footer from './Components/Footer'
import Checkout from './Pages/Checkout';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
