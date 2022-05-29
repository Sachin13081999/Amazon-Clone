import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Button } from '@mui/material';
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from './reducer';
function Subtotal() {
  const[{basket} , dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
       renderText={(value) =>(
        <>
        <p>
          Subtotal({basket.length} items);
          <strong>{value}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox"/>This order contains 
          a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeperator={true}
      prefix={"$"}
     />
     <Button>Proceed to Checkout</Button>
    </div>
  )
}

export default Subtotal
