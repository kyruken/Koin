import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to='/Koin'><img src="https://i.imgur.com/pe8pQ6v.png" width="125" className="margin-left"></img></Link>

            <div className="navbar-links margin-right">
                <Link to='/alternatives'>Alternatives</Link>
                <Link to='/aboutus'>About Us</Link>
            </div>
        </div>
    )
}