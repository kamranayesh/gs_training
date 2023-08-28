import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Homepage from "./Homepage";
import Home from "./Home";
import Counter from "./Counter";
import { useState } from "react";
import Student from "./Student";
import Todo from "./todo/Todo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Ecommerce from "./Ecommerce";
import RefExample from "./refhook";
import Ecommercestruct from "./Ecommercestruct";
import ReduxCounter from "./ReduxCounter";
import EmployeeApp from "./EmployeeApp/EmployeeApp";
import ReduxTodo from "./ReduxTodo";
import ReduxEmployee from "./ReduxEmployee";
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
        <br />
        <Link to="/ecommercestruct"> Ecommerce Strcutured</Link>
        <br /> */}
        <ReduxEmployee />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/todos" element={<Todo />} />
          <Route path="/students" element={<Student students={students} />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/ecommercestruct" element={<Ecommercestruct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
