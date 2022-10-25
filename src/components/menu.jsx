import React from 'react';

export default function Menu(props) {
    console.log(props);
    const coinElements = props.allCoins.map(coin => {
    return (<div className="menu-item">

            <h2><img src={coin.icon_url} width="50"></img>{coin.name}</h2>

        <p>{coin.symbol}</p>
    </div>)
    })
    return (
        <div className="menu">
            {coinElements}

        </div>
    )
}