import React, { useState } from 'react';
import NavBar from "../NavBar/NavBar";
import './Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="container-header">
            <NavBar isOpen={isMenuOpen} />
            {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
            <div className="container">
                
            </div>
        </div>
    );
}

export default Header;
