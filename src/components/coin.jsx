import React from 'react';

import Star from './star.jsx';
import Heemcoin from './heemcoin.jsx';

export default function Coin(props) {
    return (
        <div className="coin-page">
            <div className="coin-container">
                <div className="coin-name-container">
                    <img src={props.icon_url} width="50"></img>
                    <h2>{props.name}</h2>
                    <p className="symbol-color">{props.symbol}</p>
                </div>
                <Star
                isFavorite={props.isFavorite}
                ></Star>
            </div>
            <div className="similar-assets">
                <h4>Similar assets</h4>
                <Heemcoin />
                <Heemcoin />
                <Heemcoin />
                <Heemcoin />
                <Heemcoin />
            </div>
            <div className="market-statistics">
                <h2>Market Statistics</h2>
                <h3 className="margin-left">$ {props.price}</h3>
                <p># {props.id}</p>
                <p>Supply: {props.supply}</p>
            </div>

        </div>
    )
}