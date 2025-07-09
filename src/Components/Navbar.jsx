import React, { useState } from 'react';
import { Menu, X, BookOpen, Users, FileText, Home, UserPlus, LogIn } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <div className="logo">
            <BookOpen className="logo-icon" />
            <span className="logo-text">Moilearn</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-menu-desktop">
            <div className="nav-links">
              <a href="#c" className="nav-link">
                <Home className="nav-icon" />
                <span>Home</span>
              </a>
              <a href="#c" className="nav-link">
                <FileText className="nav-icon" />
                <span>Notes</span>
              </a>
              <a href="#c" className="nav-link">
                <Users className="nav-icon" />
                <span>Community</span>
              </a>
              <a href="#c" className="nav-link">
                <UserPlus className="nav-icon" />
                <span>Register</span>
              </a>
            </div>
          </div>

          {/* Desktop Login Button */}
          <div className="desktop-login">
            <button className="login-btn">
              <LogIn className="login-icon" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-btn">
            <button onClick={toggleMenu} className="menu-toggle">
              {isMenuOpen ? (
                <X className="menu-icon" />
              ) : (
                <Menu className="menu-icon" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <a href="#c" className="mobile-nav-link">
              <Home className="mobile-nav-icon" />
              <span>Home</span>
            </a>
            <a href="#c" className="mobile-nav-link">
              <FileText className="mobile-nav-icon" />
              <span>Notes</span>
            </a>
            <a href="#c" className="mobile-nav-link">
              <Users className="mobile-nav-icon" />
              <span>Community</span>
            </a>
            <a href="#c" className="mobile-nav-link">
              <UserPlus className="mobile-nav-icon" />
              <span>Register</span>
            </a>
            <button className="mobile-login-btn">
              <LogIn className="mobile-login-icon" />
              <span>Login</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;