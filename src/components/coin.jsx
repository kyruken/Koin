import React from 'react';

import Star from './star.jsx';

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
                <div className="similar-coin">
                    <img src="https://assets.coinlayer.com/icons/611.png" width="35"></img>
                    <h5>Heemcoin</h5>
                    <p className="symbol-color">HMC</p>
                    <p>$9,001</p>

                </div>
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