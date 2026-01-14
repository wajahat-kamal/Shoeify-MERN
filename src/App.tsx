import React from "react";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsPage from "./page/ProductsPage";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Cart/>
            <Footer />
          </>
        }
      />
      <Route
        path="/shopping"
        element={
          <>
            <Navbar />
            <ProductsPage />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
