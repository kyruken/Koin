import React from 'react';
import '../App.css';

export default function Header(props) {
    const [hasContent, setHasContent] = React.useState(false);
    function handleChange(e) {
        console.log(e.target.value)
        props.allCoins.forEach(coin => {
            const formatName = coin.name.toLowerCase();
            const formatValue = e.target.value.toLowerCase();
            const isVisible = formatName.includes(formatValue);
            if (isVisible) {
                setHasContent(true); 
                console.log(coin);
            }
        })
    }

    return (
        <div className="header">
            <h2>What coins are you interested in?</h2>
            <p>Look through our top 100 cryptocurrencies to find out more.</p>
            {/* <div className="searchbar-wrapper">
                <input type='text' name="searchbar" id="searchbar" placeholder="Search" onChange={(e) => handleChange(e)}></input>
                <img alt="Magnifying glass icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/256px-Magnifying_glass_icon.svg.png"></img>
            </div> */}
            
        </div>
    )
}