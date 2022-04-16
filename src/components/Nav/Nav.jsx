import { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import "./style/Nav.style.css";

function Nav() {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   function watchWidth() {
  //     if (window.innerWidth < 768) {
  //       setIsMobile(true);
  //     } else {
  //       setIsMobile(false);
  //     }
  //   }
  //   window.addEventListener("resize", watchWidth);

  //   return function () {
  //     window.removeEventListener("resize", watchWidth);
  //   };
  // }, []);

  function toggle() {
    setIsMobile((prev) => !prev);
  }

  return (
    <div className="nav-container">
      <nav className="navbar container">
        <div className="nav-logo">
          <img src={process.env.PUBLIC_URL + "assets/images/logo.svg"} />
        </div>
        <div onClick={toggle} className={isMobile ? "menu-btn open" : "menu-btn"}>
          <div className="menu-btn__burger"></div>
        </div>
        <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li>SHOP</li>
          <li>CONTACT</li>
          <li>SIGN IN</li>
          <li>
            <img className="nav__cart" src={process.env.PUBLIC_URL + "assets/images/bag.svg"} />
          </li>
        </div>
      </nav>
      <Hero />
    </div>
  );
}

export default Nav;
