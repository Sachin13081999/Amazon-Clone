import React from 'react'
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from"./Subtotal";

function Checkout() {
  const[{basket}, dispatch] = useStateValue();
  return (
    <div className="checkout">
       <div className="checkout__left">
         <img className='checkout__ad'
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/BAU/OP_Dec/D24582943_IN_WL_Category_Page_1500x400.gif"
         alt=""
         />  
      
        <div className="checkout__title">
         <h2>Your shopping Basket</h2>
         {basket.map(item =>(
           <CheckoutProduct
           id={item.id}
           title={item.title}
           image={item.image}
           price={item.price}
           rating={item.rating}
           />
         ))}
         </div>
       </div>
       <div className="checkout__right">
        <Subtotal/>
         </div>
    </div>
  )
}

export default Checkout
