import React from 'react';

export default function Navbar() {
    return (
        <div className="navbar">
            <h1>Coinchange</h1>
            
            <div className="searchbar-wrapper">
            <input type='text' name="searchbar" id="searchbar" placeholder="Search"></input>
            <img alt="Magnifying glass icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/256px-Magnifying_glass_icon.svg.png"></img>
            </div>
            
        </div>
    )
}