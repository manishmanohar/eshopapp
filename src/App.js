import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Signup from "./components/Forms/Signup.js"
import Signin from "./components/Forms/Signin.js"
import ProductCard from "./components/cards/Card.js"
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Address from './components/Forms/Address';
import ModifyProduct from './components/Forms/ModifyProduct';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Context, { UserContext } from './UserContext';


function App() {

  return (
    <div className="App">
      <Context>

        <Routes>
          <Route path='/' element={<Signin />}></Route>
          <Route path='/login' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/address' element={<Address />}></Route>
          <Route path='/modifyProduct' element={<ModifyProduct />}></Route>
          <Route path='/productDetails' element={<ProductDetails />}></Route>
        </Routes>
      </Context>

    </div>
  );
}

export default App;
