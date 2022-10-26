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

import data from '../data.js';

let favoriteToggle = false;
let coinComponent;

export default function theTable(props) {
    const [coins, setCoins] = React.useState([]);
    const [allCoins, setAllCoins] = React.useState([]);
    const [activePage, setActivePage] = React.useState("allCoins");
    const [coinCount, setCoinCount] = React.useState(10);
    
    React.useEffect(() => {
        //for now, we will pretend that we will be fetching from an API 
        setAllCoins(data);
        setCoins(data.slice(0,10));
        // Promise.all([
        //   fetch('http://api.coinlayer.com/list?access_key=e1f502ee8ff24808d2669766b28a3dd7').then(res => res.json()),
        //   fetch('http://api.coinlayer.com/api/live?access_key=e1f502ee8ff24808d2669766b28a3dd7').then(res => res.json()),
        // ]).then(data => setAllCoins(() => {
        //   const coinArray = [];
        //   let counter = 0;
        //   for (const coin in data[0].crypto) {
        //     if (Object.hasOwn(data[0].crypto, coin)) {
        //       coinArray.push(data[0].crypto[coin]);
        //     }
        //   }

        //   for (let x = 0; x < coinArray.length; x++) {
        //     coinArray[x].isFavorite = false;
        //     coinArray[x].id = x;
        //     coinArray[x].price = 0;
        //   }

        //   for (const price in data[1].rates) {
        //     if (Object.hasOwn(data[1].rates, price)) {
              
        //       coinArray[counter].price = data[1].rates[price];  
        //     }
        //     counter++;
            
        //   }
        //   setCoins(coinArray.slice(0,10));
        //   return coinArray;
        // }));

    }, [])
    function getPrevCoins() {
        setCoinCount(coinCount => coinCount - 10);
        if (coinCount <= 10) {
            setCoinCount(coinCount => coinCount + 10);
            return;
        }
        const coinArray = [];

        for (let x = 0, y = coinCount - 20; x < 10; x++) {
            coinArray[x] = allCoins[y];
            y++;
        }

        setCoins(coinArray);
    }

    function getNextCoins() {
        setCoinCount(coinCount => coinCount + 10);
        if (coinCount >= allCoins.length) {
            setCoinCount(coinCount => coinCount - 10);
            return;
        }
        const coinArray = [];

        for (let x = 0, y = coinCount; x < 10; x++) {
            coinArray[x] = allCoins[y];
            y++;
        }
        setCoins(coinArray);
    }

    function getFavorites() {
        let counter = 0;
        favoriteToggle = !favoriteToggle;
        if (favoriteToggle === true) {
            let prevArray = coins;
            const favoriteCoins = allCoins.filter(coin => {

                if (coin.isFavorite === true && counter < 10) {
                    counter++;
                    return coin;
                }
            });
            setCoins(favoriteCoins);
        } else {
            setCoins(allCoins.slice(0, 10));
        }

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
            supply={coin.max_supply}
        />
    }

    function handleClick(id) {
        //For showing the favorites on display
        setCoins(prevCoins => {
            let newCoins = prevCoins.map(coin => {
                return coin.id === id ? { ...coin, isFavorite: !coin.isFavorite } : coin;
            })
            return newCoins;
        })
        //For setting it to our AllCoins state
        setAllCoins(prevCoins => {
            let newCoins = prevCoins.map(coin => {
                return coin.id === id ? { ...coin, isFavorite: !coin.isFavorite } : coin;
            })
            return newCoins;
        })
        // setAllCoins(prevCoins => {
        //     let newCoins = prevCoins.map(coin => {
        //         if (coin.id === id) {
        //             let newCoin = { ...coin, isFavorite: !coin.isFavorite };
        //             return newCoin;

        //         }
        //         else {
        //             return coin;
        //         }
        //     })
        //     return newCoins;
        // })
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
            <TableCell sx={{ border: 0 }}>{row.max_supply}</TableCell>

        </TableRow>
    ))

    return (
        <div className="table-container">
            <button onClick={() => setCoinCount(20)}>Does it work</button>
            {activePage === "allCoins"
                &&
                <div>
                    <h2>Market Report</h2>
                    <button onClick={getFavorites}>Favorites</button>
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