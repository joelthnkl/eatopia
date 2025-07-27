import './Header.css';
import { useEffect, useState } from 'react';
import Logo from "../assets/logo.svg?react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <a href="#" className="logo-link">
          <Logo className={`logo ${isScrolled ? 'logo-scrolled' : ''}`} />
        </a>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#restaurants">Restaurants</a>
          <a href="#about">About Us</a>
        </nav>
        
        <div className="header-right">
          <button className="get-started-btn">Login / Signup</button>
          <button className="get-started-btn book-now-btn">Book Now</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
