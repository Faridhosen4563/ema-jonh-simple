import React from 'react';

const Cart = (props) => {
    console.log(props);

    return (
        <div>
            <p>Total item : {props.cart.length}</p>
        </div>
    );
};

export default Cart;