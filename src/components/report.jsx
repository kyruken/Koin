import React from 'react';

export default function Report() {
    return (
        <div className="report-container">
            <h2>Market Report</h2>
            <div className="row-1-2">
                <button>All currencies</button>
                <button>Favorites</button>
                {/* Maybe we do gainers and losers */}
                <button>Gainers</button>
                <button>Losers</button>
            </div>

            <div>
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
    )
}