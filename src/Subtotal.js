import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
//import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./Reducer";

function Subtotal() {
   //const [{basket},dispatch]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                     총액(0 items):<strong> 0원</strong>
                </p>
                <small className="subtotla_gift">
                    <inpurt type="checkbox"/> 체크박스입니다.
                </small>
                </>

            )}
            decimalScale={2}/*decimalScale 소수점 몇자리까지 보여줄꺼냐*/
            value={0}
            displayType={"text"}
            thousandSeparator={true}
             prefix={'$'} 
            />
            <button> 결제하기</button>
        </div>
    );
}

export default Subtotal;
