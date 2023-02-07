import React from "react";
import { ReactDOM } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import "/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Temporary rendering Products for homepage */}
          <Route path="/" element={<Products />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

  createRoot(document.querySelector("#react-root")).render(<React.StrictMode><App /></React.StrictMode>);
