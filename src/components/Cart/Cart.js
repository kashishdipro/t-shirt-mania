import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please buy atleast one!!!</p>
    }else{
        message = <p>Thanks for buying!</p>
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key={tshirt._id}

                >{tshirt.name}
                <button onClick={() => handleRemoveItem(tshirt)}>X</button></p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;

/*
Conditional Rendering:
1. use element in a variable and then use if-else to set value
2. ternary operation: (condition ? true : false)
3. && operator(if condition true, i want to display something)
4. || operator(if condition false, i want to display something)
*/