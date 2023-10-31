import React from 'react'
import axios from 'axios'
// import { useSelector } from 'react-redux'
import Button from './Button'

const CheckoutBtn = (props) => {

  
      const handleCheckout = async (cartItems) => {
      console.log("cart items");
     try {
      await axios.post('http://localhost:9000/stripe/create-checkout-session',{cartItems, userId: 1})
      .then((res) => {
        console.log("hey" + res)
        window.location.href= res.data.url;
      }).catch((error) => {console.log("Error in checkout", error)})
     } catch (error) {
      console.log("Error in catch in try catch" + error)
     }
  }
  
  return (
    <div>
      <button className="bg-[#BF5A36] text-white my-6 font-bold px-6 shadow-lg"
      onClick={()=>{handleCheckout("Book1")}}>{props.children}</button>
      
    </div>
  )
}

export default CheckoutBtn;
