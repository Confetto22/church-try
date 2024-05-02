import NavTop from "./NavTop";
import "./Nav.css";
import churchLogo from "../../assets/images/logo_Asset-2-2.png";

const Header = () => {
  return (
    <header>
      <NavTop />
      <hr className="headerDivide" />
      <nav className="navbar">
        <img src={churchLogo} className="churchLogo" />
        <i className="bx bx-menu-alt-right menuBt"></i>
      </nav>
    </header>
  );
};

export default Header;
