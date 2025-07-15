import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/super-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="Super Logo" className="logo-img" />
          </Link>
        </div>

        {/* Burger */}
        <div className="burger" onClick={() => setOpen(!open)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Nav Links */}
        <div className={`navbar-right ${open ? "open" : ""}`}>
          <Link to="/templates">Templates</Link>
          <Link to="/showcase">Showcase</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/guides">Guides</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/signin" className="signin">Sign in</Link>
          <button className="cta-btn">Get started free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
