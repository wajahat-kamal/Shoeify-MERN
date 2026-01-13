import React from "react";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsPage from "./page/ProductsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
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
