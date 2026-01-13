import React from "react";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./page/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
