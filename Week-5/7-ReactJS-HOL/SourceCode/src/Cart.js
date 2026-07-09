import React from "react";

function Cart(props) {

    return (

        <table border="1" cellPadding="5">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>

                {props.item.map((product, index) => (

                    <tr key={index}>
                        <td>{product.itemname}</td>
                        <td>{product.price}</td>
                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default Cart;