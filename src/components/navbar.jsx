import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to='/'><img src="../src/assets/koinlogo.png" width="125" className="margin-left"></img></Link>

            <div className="navbar-links margin-right">
                <a>Alternatives</a>
                <Link to='/aboutus'>About Us</Link>
            </div>
        </div>
    )
}