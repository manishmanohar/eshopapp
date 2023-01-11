import { React, useState } from 'react'
import ProductCard from '../cards/Card'
import "./Home.css"
import Navbar from '../navbar/Navbar'
import { ToggleButtonGroup } from '@mui/material';
import { ToggleButton } from '@mui/material';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  let response = axios.get('http://localhost:3001/products');
  response.then((res) => {
    setProducts(res.data);
  });
  const cards = products.map(item => {
    return (
      <ProductCard
        key={item.id}
        {...item}
      />
    )
  });
  response = axios.get('http://localhost:3001/categories');
  response.then((res) => {
    setCategories(res.data);
  });
  const tabs = categories.map(item => {
    return (
      <ToggleButton>{item.name}</ToggleButton>
    )
  });

  return (
    <div className='home'>
      <Navbar />
      <div className='togglebuttongroup'>
        <ToggleButtonGroup
          color="primary"

          // value={alignment}
          // exclusive
          // onChange={handleChange}
          aria-label="Platform"
        >
          {tabs}

        </ToggleButtonGroup>
      </div>
      <div className='sortby--filter'>
        <label for="sortby" style={{padding:'10',marginTop:'10px',width:'200px'}}>Sort By:</label><br/>
        <select name="sort" id="sortyby">
        <option value="Defaut">Defaut</option>
        <option value="pricesHighToLow">Prices: High to Low</option>
        <option value="pricesLowToHigh">Prices: Low to High</option>
        <option value="newest">Newest</option>
      </select>
      </div>
      <div className='cards--list'>
        {cards}
      </div>
    </div>



  )
}