import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./page/Home";
import ProductsPage from "./page/ProductsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      {/* ToastContainer should be rendered once in your app */}
      <ToastContainer />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Cart />
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
              <Cart />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
