import React from 'react';

import Grid from './grid.jsx';
export default function Report() {
    return (
        <div className="report-container">
            <h2>Market Report</h2>

            <div className="report-buttons">
                <div className="column-1-2">
                    <button>All currencies</button>
                    <button>Favorites</button>
                    {/* Maybe we do gainers and losers */}
                    <button>Gainers</button>
                    <button>Losers</button>
                </div>
                <div className="column-2-2">
                    <select name="currency" id="currency">
                        <option value="usd">USD</option>
                        <option value="rupee">Rupee</option>
                        <option value="won">Won</option>
                    </select>
                    <select name="timestamp" id="timestamp">
                        <option value="day">1D</option>
                        <option value="week">7D</option>
                        <option value="month">1M</option>
                        <option value="year">1Y</option>
                    </select>
                </div>
            </div>

            <Grid />

        </div>
    )
}