import Homepage from "./Homepage";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Login({ hobby, title }) {
  let titleinfn = "Login Here Now!";
  function doLogin() {
    alert("you are logged in");
  }
  return (
    <div className="Login">
      {/* <h4 className="Login-header">{title}</h4> */}
      <h2> Login</h2>
      <input type="text" name="username" />
      <br />
      <input type="password" name="password" />
      <br />
      <button onClick={Homepage}>Login</button>
      <br />
      <Link className="nav-bar-items" to="/login/forgetpassword">
        Forget password?
      </Link>
      <br />
      <Outlet />
    </div>
  );
}

export default Login;
