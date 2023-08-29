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
import Blog from "./contextExample/Blog";
import Counter_ from "./Counter_";
import LazyHome from "./lazyandsuspense/LazyHome";
import ForgetPassword from "./ForgetPassword";

function App() {
  const [hide, setHide] = useState(false);
  const toggle = () => {
    setHide(!hide);
  };
  let students = ["Kamran", "Sana", "Nidhi", "Apoorva", "Shreyanshi"];
  return (
    <div className="App">
      <BrowserRouter>
        <Link className="nav-bar-items" to="/">
          Home
        </Link>

        <Link className="nav-bar-items" to="/todos">
          Todos
        </Link>

        <Link className="nav-bar-items" to="/students">
          Students
        </Link>

        <Link className="nav-bar-items" to="/ecommerce">
          Ecommerce
        </Link>

        <Link className="nav-bar-items" to="/ecommercestruct">
          Ecommerce Strcutured
        </Link>
        <Link className="nav-bar-items" to="/reduxemployee">
          Redux Employee
        </Link>
        <Link className="nav-bar-items" to="/lazyhome">
          Lazy Home
        </Link>

        <Link className="nav-bar-items" to="/login">
          Login
        </Link>
        {/* <Counter_ /> */}
        {/* <Blog /> */}
        {/* <ReduxEmployee /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/todos" element={<Todo />} />
          <Route path="/students" element={<Student students={students} />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/ecommercestruct" element={<Ecommercestruct />} />
          <Route path="/reduxemployee" element={<ReduxEmployee />} />
          <Route path="/lazyhome" element={<LazyHome />} />
          <Route path="/login" element={<Login />}>
            <Route path="forgetpassword" element={<ForgetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
