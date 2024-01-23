import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => {
  const totalBill = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price.replace("$", "")),
      0
    );
  }, [cartItems]);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  width="80"
                  height="80"
                />
                <div>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="checkout-button">
            <Link to="/checkout">Checkout</Link>
          </button>
          <p className="total-bill">Total Bill: ${totalBill.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
