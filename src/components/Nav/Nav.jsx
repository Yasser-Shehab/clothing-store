import { useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import Footer from "../Footer/Footer";
import "./style/Nav.style.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const { currentUser } = useContext(UserContext);

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
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/sign-in">
                SIGN IN
              </Link>
            )}

            <Link className="nav-link" to="">
              <img className="nav__cart" src={process.env.PUBLIC_URL + "assets/images/bag.svg"} />
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Nav;
