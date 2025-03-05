import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-right hidden md:flex">
          <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Contact</li>
          </ul>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-icon md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden">
          <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;