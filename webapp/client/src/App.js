import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Home";

const App = () => {
  const [cartItems, setCartItems] = useState([]); // [1
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/cart" element={<Cart />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
