import Homepage from "./Homepage";
function Login({ hobby, title }) {
  let titleinfn = "Login Here Now!";
  function doLogin() {
    alert("you are logged in");
  }
  return (
    <div className="Login">
      <h4 className="Login-header">{title}</h4>
      <input type="text" name="username" />
      <br />
      <input type="password" name="password" />
      <br />
      <button onClick={Homepage}>Login</button>
    </div>
  );
}

export default Login;
