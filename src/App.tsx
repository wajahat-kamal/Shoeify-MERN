import React from "react";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsPage from "./page/ProductsPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
      <Route
        path="/shopping"
        element={
          <>
            <Navbar />
            <ProductsPage />
          </>
        }
      />
    </Routes>
  );
}

export default App;
