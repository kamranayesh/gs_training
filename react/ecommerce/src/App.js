import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Ecommerce from "./Ecommerce";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Ecommerce />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/ecommerce" element={<Ecommerce />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
