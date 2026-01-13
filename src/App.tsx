import React from "react";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./page/Products";
import Navbar from "./components/Navbar";

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
            <Products />
          </>
        }
      />
    </Routes>
  );
}

export default App;
