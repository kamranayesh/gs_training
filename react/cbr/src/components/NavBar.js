import { Link } from "react-router-dom";
import "../App.css";
const NavBar = () => {
  return (
    <div>
      <Link className="nav-bar-items" to="/home">
        Home
      </Link>
      <Link className="nav-bar-items" to="/about">
        About
      </Link>
    </div>
  );
};

export default NavBar;
