import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
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
            <Link to="/">
              <img className="logo" src={process.env.PUBLIC_URL + "assets/images/logo.svg"} />
            </Link>
          </div>
          <div className="menu-btn" onClick={toggle}>
            <div className={mobileMenuOpen ? "menu-btn__burger cross" : "menu-btn__burger"}></div>
          </div>
          <div className={mobileMenuOpen ? "nav-links-wrapper open" : "nav-links-wrapper"}>
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
            <Link className="nav-link" to="">
              <img className="nav__cart" src={process.env.PUBLIC_URL + "assets/images/bag.svg"} />
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
