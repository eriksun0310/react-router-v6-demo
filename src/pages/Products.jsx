import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
    const location  = useLocation()
    const navigate =useNavigate()
    console.log('location  ==>', location)
  return <>
    <h1>
        Products
    </h1>
    <button onClick={()=>navigate('/products/3')}>Product 3</button>
  </>
  ;
};

export default Products;
