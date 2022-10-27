import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">
            <div className="margin-right margin-top">
                <div className="links">
                    <Link to='/alternatives'>Alternatives</Link>
                    <Link to='/aboutus'>About Us</Link>
                </div>
                <p>Heemerdingers &copy; Copyright 2022</p>
            </div>
        </div>
    )
}