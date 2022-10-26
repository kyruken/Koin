import React from 'react';

import Star from './star.jsx';
import Coin from './coin.jsx';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function theTable(props) {
    const [coins, setCoins] = React.useState(props.allCoins.slice(0, 10));
    const [activePage, setActivePage] = React.useState("allCoins");
    const [coinCount, setCoinCount] = React.useState(10);
    
    React.useEffect(() => {
        setCoins(props.allCoins.slice(coinCount-10, coinCount));

    }, [coinCount])

    function getPrevCoins() {
        setCoinCount(coinCount => coinCount - 10);
        if (coinCount <= 10) {
            setCoinCount(coinCount => coinCount + 10);
            return;
        }
        const coinArray = [];

        for (let x = 0, y = coinCount - 20; x < 10; x++) {
            coinArray[x] = props.allCoins[y];
            y++;
        }

        setCoins(coinArray);
    }

    function getNextCoins() {
        setCoinCount(coinCount => coinCount + 10);
        if (coinCount >= 50) {
            setCoinCount(coinCount => coinCount - 10);
            return;
        }
        const coinArray = [];

        for (let x = 0, y = coinCount; x < 10; x++) {
            coinArray[x] = props.allCoins[y];
            y++;
        }
        setCoins(coinArray);
    }

    function getActivePage(coin) {
        activePage === "allCoins" ? setActivePage("singleCoin") : setActivePage("allCoins");
        coinComponent = <Coin
            isFavorite={coin.isFavorite}
            id={coin.id}
            name={coin.name}
            icon={coin.icon}
            symbol={coin.symbol}
            price={coin.price}
            supply={coin.supply}
        />
    }

    function handleClick(id) {
        setCoins(prevCoins => {
            let newCoins = prevCoins.map(coin => {
                if (coin.id === id) {
                    let newCoin = { ...coin, isFavorite: !coin.isFavorite };
                    return newCoin;

                }
                else {
                    return coin;
                }
            })

            return newCoins;
        })

        setAllCoins(prevCoins => {
            let newCoins = prevCoins.map(coin => {
                if (coin.id === id) {
                    let newCoin = { ...coin, isFavorite: !coin.isFavorite };
                    return newCoin;

                }
                else {
                    return coin;
                }
            })

            return newCoins;
        })
    }


    const coinElements = coins.map((row) => (
        <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell sx={{ border: 0 }}>
                <Star
                    isFavorite={row.isFavorite}
                    toggleFavorite={() => handleClick(row.id)}
                />
            </TableCell>
            <TableCell sx={{ border: 0 }}>{row.id}</TableCell>
            <TableCell component="th" scope="row" sx={{ border: 0 }}>
                <button className='coin-name-container' onClick={() => getActivePage(row)}>
                    <img src={row.icon_url} width="30"></img>
                    <h3>{row.name}</h3>
                    <p>{row.symbol}</p>
                </button>
            </TableCell>
            <TableCell sx={{ border: 0 }}>{row.price}</TableCell>
            <TableCell sx={{ border: 0 }}>{row.supply}</TableCell>

        </TableRow>
    ))

    return (
        <div className="table-container">
            <button onClick={() => console.log(coins)}>Does it work</button>
            {activePage === "allCoins"
                &&
                <div>
                    <h2>Market Report</h2>
                    {/* <button onClick={getFavorites}>Favorites</button> */}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>#</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Supply</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {coinElements}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <button onClick={getPrevCoins}>Previous</button>
                    <button onClick={getNextCoins}>Next</button>
                </div>
            }
            {activePage === "singleCoin"
                &&
                <div>
                    <button onClick={() => getActivePage('')}>Back</button>
                    {coinComponent}

                </div>
            }

        </div>
    )
}