import React from 'react';
import Logo from '../Logo/logo.png';
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="brand-name">
              <div className="navlink">
                <div className="Na">Nutritional Analysis</div>
                <div className="recep">Recipies</div>
                <div className="ingred">Find Ingredients</div>
              </div>
            </div>
        </div>
    )
}

export default Navbar;