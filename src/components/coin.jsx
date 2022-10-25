import React from 'react';

import Star from './star.jsx';

export default function Coin(props) {
    return (
        <div className="coin-page">
            <div className="coin-name-container">
                <Star
                isFavorite={props.isFavorite}
                ></Star>
                <h2><img src={props.icon} width="50"></img>{props.name}</h2>
                <p>{props.symbol}</p>
            </div>
            <p># {props.id}</p>
            <p>Price: {props.price}</p>
            <p>Supply: {props.supply}</p>
{/* 
                    icon={coin.icon}
        symbol={coin.symbol}
        price={coin.price}
        supply={coin.supply} */}

        </div>
    )
}