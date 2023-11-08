import React from 'react'
import './Subtotal.css'
//sudo npm i react-currenct-format --save --force 
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Alttoplam (0 ürün): <strong>$0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> Bu sipariş bir hediye içerir
                        </small>
                    </>
                )}

                decimalScale={2}
                value={45}
                displayType={"text"}
                thousandSeparator={true}

            />

            <button>Siparişi İlerlet</button>
        </div>
    )
}

export default Subtotal