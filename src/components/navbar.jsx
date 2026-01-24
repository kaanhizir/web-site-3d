import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";
import Logo from "../assets/images/logo1.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <div className="navbar-outside">
        
        <div className="logo">
          <Link to="/">
            <img className="logo-pc" src={Logo} alt="Logo" />
          </Link>
        </div>
<div className="kaan">
        <ul className="navbar-links">
          <li className="li-style">
            <Link to="/">Anasayfa</Link>
          </li>
          <li className="li-style">
            <Link to="/urunler">Ürünlerimiz</Link>
          </li>
          <li className="li-style">
            <Link to="/hakkimizda">Hakkımızda</Link>
          </li>
          <li className="li-style">
            <Link to="/iletisim">İletişim</Link>
          </li>
          <div className="socialMedia">
          <a href="https://www.instagram.com/ucboyutluatolye/"><li><IoLogoInstagram color="white" size="20px" /></li></a>
          <li><FaXTwitter color="white" size="20px" /></li>
          <li><FaWhatsapp color="white" size="20px" /></li>
          </div>
        </ul>
</div>
      </div>
    </nav>
  );
}

export default Navbar;
