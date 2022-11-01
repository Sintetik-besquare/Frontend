import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Logo from "../../assets/logo-sintetik.jpg";

function NavBar() {
  return (
    <div className="justify-between navbar">
      <HashLink smooth to="/#home" className="glow">
        <img src={Logo} alt="Logo" className="icon" />
      </HashLink>
      <nav>
        <ul>
          <li><HashLink smooth to="/#home" className="glow">Home</HashLink></li>
          <li><HashLink smooth to="/#about" className="glow">About</HashLink></li>
          <li><Link to="/trade" className="glow">Trade</Link></li>
          <li><Link to="/news" className="glow">News</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
