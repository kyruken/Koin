import React from 'react';

export default function Navbar() {
    return (
        <div className="navbar">
            <img src="../src/assets/koinlogo.png" width="125" className="margin-left"></img>

            <div className="navbar-links margin-right">
                <a>Alternatives</a>
                <a>About Us</a>
            </div>
            
        </div>
    )
}