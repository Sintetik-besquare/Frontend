import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo-sintetik.jpg";

function NavBar() {
  return (
    <div className="flex" style={{background:'black'}}>
      <div>
        <HashLink smooth to="/#home">
          <img src={Logo} alt="Logo" style={{ width: 50 }} />
        </HashLink>
      </div>
      <div>
        <ul className="navbar">
          <HashLink smooth to="/#home" className="li">
            <li>Home</li>
          </HashLink>

          <HashLink smooth to="/#about" className="li">
            <li>About</li>
          </HashLink>

          <Link to="/trade" className="li">
            <li>Trade</li>
          </Link>

          <Link to="/news" className="li">
          <li> News</li>
          </Link>
          <li> <button className="button-green">SIGN UP</button></li>
          <li><button className="button-red">SIGN IN</button></li>
        
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
