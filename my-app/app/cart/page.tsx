"use client";

import { useEffect } from "react";

const CartPage = () => {

    useEffect(() => {
     const value =   JSON.parse(localStorage.getItem('cart')|| "{}");

     console.log(value);
     
    },[])
  return (
    <div>CartPage</div>
  )
}

export default CartPage