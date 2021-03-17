import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Hero from "./Componenets/Hero";
import Products from "./Componenets/Prodacts/Products";
import {productData,productDataTwo} from "./Componenets/Prodacts/Data";
import Feature from "./Componenets/Feature/Feature";
import Footer from "./Componenets/Footer/Footer";
import './style.css'
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
box-sizing: border-box;
margin: 0;
padding: 0; 
font-family: 'Kanit', sans-serif;
}
`;

function App() {
  return (
    <Router>
        <GlobalStyle/>
        <Hero/>
        <Products heading = 'Choose your favorite' data ={productData}/>
        <Feature/>
        <Products heading = 'Sweet Treats for You' data ={productDataTwo}/>
        <Footer/>

    </Router>
  );
}

export default App;
