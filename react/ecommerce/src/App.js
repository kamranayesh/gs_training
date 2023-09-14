import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Ecommerce from "./Ecommerce";

function App() {
  const [input, setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
    console.log(input);
  }
  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <Ecommerce />
    //     <Routes>
    //       {/* <Route path="/" element={<Home />} /> */}
    //       <Route path="/ecommerce" element={<Ecommerce />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <>
      <ChildApp />
      <ChildApp />
      <input type="text" onChange={handleChange} value={input}></input>
    </>
    // <div></div>
  );
}

function ChildApp() {
  return <div>testchidl</div>;
}
export default App;
