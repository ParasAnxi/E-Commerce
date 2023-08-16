import Navbar from 'components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Items from 'components/Items';
import HomePage from 'components/HomePage';
import Cart from 'components/Cart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCartItemsAsync } from 'features/cart/cartSlice';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCartItemsAsync()); 
  },[]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/items' element={<Items/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
