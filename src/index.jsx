import React from "react";
import { ReactDOM } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import Cart from "./Cart.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/products" element={<Products />}>
          </Route>
          <Route path="/cart" element={<Cart />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><App /></React.StrictMode>);
