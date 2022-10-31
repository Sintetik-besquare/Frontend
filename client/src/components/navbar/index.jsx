import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Logo from "../../assets/logo-sintetik.jpg";

function NavBar() {
  return (
    <div className="justify-between navbar">
      <HashLink smooth to="/#home" className="link">
        <img src={Logo} alt="Logo" className="icon" />
      </HashLink>
      <nav>
        <ul className="justify-evenly">
          <li><HashLink smooth to="/#home" className="link">Home</HashLink></li>
          <li><HashLink smooth to="/#about" className="link">About</HashLink></li>
          <li><Link to="/trade" className="link">Trade</Link></li>
          <li><Link to="/news" className="link">News</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
