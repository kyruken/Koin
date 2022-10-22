import React from 'react';
import '../App.css';

export default function Header() {
    return (
        <div className="header">
            <h2>What coins are you interested in?</h2>
            <p>Look through our top 100 cryptocurrencies to find out more.</p>
            <div className="searchbar-wrapper">
                <input type='text' name="searchbar" id="searchbar" placeholder="Search"></input>
                <img alt="Magnifying glass icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/256px-Magnifying_glass_icon.svg.png"></img>
            </div>
            
        </div>
    )
}