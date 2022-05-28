import React from 'react'
import "./Checkout.css";
import Subtotal from"./Subtotal";

function checkout() {
  return (
    <div className="checkout">
       <div className="checkout__left">
         <img className='checkout__ad'
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/BAU/OP_Dec/D24582943_IN_WL_Category_Page_1500x400.gif"
         alt=""
         />  
      
        <div className="checkout__title">
         <h2>Your shopping Basket</h2>
          {/*BasketItems*/}
          {/*BasketItems*/}  
          {/*BasketItems*/} 
        </div>
       </div>
       <div className="checkout__right">
        <Subtotal/>
         </div>
    </div>
  )
}

export default checkout
