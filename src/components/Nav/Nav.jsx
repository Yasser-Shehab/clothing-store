import { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import "./style/Nav.style.css";

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  // onClick={toggle} className={isMobile ? "menu-btn open" : "menu-btn"}

  return (
    <>
      <nav className="nav">
        <div className="navbar-container">
          <div className="nav-logo">
            <img className="logo" src={process.env.PUBLIC_URL + "assets/images/logo.svg"} />
          </div>
          <div className="menu-btn" onClick={toggle}>
            <div className={mobileMenuOpen ? "menu-btn__burger cross" : "menu-btn__burger"}></div>
          </div>
          <div className={mobileMenuOpen ? "nav-links-wrapper open" : "nav-links-wrapper"}>
            <li>SHOP</li>
            <li>CONTACT</li>
            <li>SIGN IN</li>
            <li>
              <img className="nav__cart" src={process.env.PUBLIC_URL + "assets/images/bag.svg"} />
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
