import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Button } from 'react-bootstrap';
import { X, BrightnessAltHighFill, List } from 'react-bootstrap-icons';
import TransparentLayer from '../TransparentLayer/TransparentLayer';
import { Link } from 'react-router-dom';

const NavLinks = ({ scrolled, isOpen, closeMenu }) => {
  const linkClass = scrolled ? 'a-scrolled' : 'a-noscrolled';

  const handleLinkClick = () => {
    if (isOpen) {
      closeMenu();
    }
  };

  return (
    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <Button variant="secondary" className="close-menu-button" onClick={closeMenu}>
          <X />
        </Button>
      )}
      <div className="brand brand-responsive" style={{ marginTop: "5px" }}>
        <BrightnessAltHighFill style={{ fontSize: "40px", marginRight: "8px", color: "#FFA500" }} />
        <span className={`${scrolled ? '' : 'brand-noscroll'}`}>Las Brisas de Cix</span>
      </div>
      <li><Link className={linkClass} to="/" onClick={handleLinkClick}>Inicio</Link></li>
      <li><Link className={linkClass} to="/lugares-cercanos" onClick={handleLinkClick}>Cercanos</Link></li>
      <li><Link className={linkClass} to="/atractivos-turisticos" onClick={handleLinkClick}>Atractivos</Link></li>
      <li><Link className={linkClass} to="/contactos" onClick={handleLinkClick}>Contactos</Link></li>
    </ul>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen && window.innerWidth > 768) {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const brandClass = scrolled ? 'icon-scrolled' : '';

  return (
    <div className={`navbar navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <nav className={`container ${isOpen ? "open" : ""}`}>

        <div className="brand">
          <BrightnessAltHighFill className={brandClass} style={{ fontSize: "40px", marginRight: "1px" }} />
          Las Brisas de Cix
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`${scrolled ? 'menu-res-scrolled' : ''}`}><List style={{ fontSize: "30px" }} /></div>
        </div>

        <NavLinks scrolled={scrolled} isOpen={isOpen} closeMenu={closeMenu} />
      </nav>
      {isOpen && <TransparentLayer />}
    </div>
  );
};

export default NavBar;
