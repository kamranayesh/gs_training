import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Homepage from "./Homepage";
import Home from "./Home";
import Counter from "./Classbasedcounter";
import { useState } from "react";
import Student from "./Student";
import Todo from "./Todo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Ecommerce from "./Ecommerce";

function App() {
  const [hide, setHide] = useState(false);
  const toggle = () => {
    setHide(!hide);
  };
  let students = ["Kamran", "Sana", "Nidhi", "Apoorva", "Shreyanshi"];
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Link to="/"> Home</Link>
        <br />
        <Link to="/todos"> Todos</Link>
        <br />
        <Link to="/students"> Students</Link>
        <br />
        <Link to="/ecommerce"> Ecommerce</Link>
        <br /> */}
        <Ecommerce />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/todos" element={<Todo />} />
          <Route path="/students" element={<Student students={students} />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
