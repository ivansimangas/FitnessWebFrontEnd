import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Make sure this is react-router-dom
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 80);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(false);
    }
  }, [location]);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        isHome ? "home" : "inner"
      }`}
    >
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">FitnessPro</Link>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/workouts">Workouts</Link>
          {/* No account link here since you don’t have that page yet */}
          <Link to="/login">Logout</Link>
        </nav>
      </div>
    </header>
  );
}
