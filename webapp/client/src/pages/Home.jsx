import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const getProducts = async () => {
    try {
      const response = await fetch("/api/v1/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []); // Include an empty dependency array to ensure useEffect runs only once

  const addToCart = async (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
  };

  const calculateTotalBill = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  return (
    <div className="container">
      <h2>Welcome to CartRover Store</h2>
      <div className="header">
        <button onClick={() => setShowCart(!showCart)}>
          <div className="cart-icon">
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-count">{cart.length}</span>
          </div>
        </button>
      </div>
      {showCart && (
        <div className="cart-container">
          <h3>Your Cart</h3>
          <ul>
            {cart.map((item) => (
              <li key={item._id} className="cart-item">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  width="50"
                  height="50"
                />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                </div>
                <button
                  className="remove-from-cart-button"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total Bill: ${calculateTotalBill().toFixed(2)}</p>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      )}
      <div className="product-container">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <img
              src={product.images[0]}
              alt={product.name}
              width="200"
              height="200"
            />
            <p>{product.name}</p>
            <p>$ {product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
