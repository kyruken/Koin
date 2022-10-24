import React from 'react';

import Star from './star.jsx';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(isFavorite, id, name, icon, symbol, price, supply) {
    return {isFavorite, id, name, icon, symbol, price, supply};
  }

let favoriteToggle = false;

  //we use getCoins function to only get the first 10 coins to display on the page

export default function theTable() {

    //we will have a state, coins, to store the 10 coins that display on the page
    //we will have a second state called allCoins, to hold our API called coin data
    //lastly, 3rd state will be the coin count that displays on the page
    const [coins, setCoins] = React.useState([]);
    const [allCoins, setAllCoins] = React.useState([]);
    //coinCount to 20 to account for the next coins to come in
    const [coinCount, setCoinCount] = React.useState(10);

    function getPrevCoins() {
        setCoinCount(coinCount => coinCount - 10);
        if (coinCount <= 10) {
            setCoinCount(coinCount => coinCount+10);
            return;
        }
        const coinArray = [];

        //if coinCount is at 20 and we want to go backwards, we start coinCount back at 0 to get 
        //0-10 coins
        for (let x = 0, y = coinCount-20; x < 10; x++) {
            coinArray[x] = allCoins[y];
            y++;
        }

        setCoins(coinArray);
      }

    function getNextCoins() {
        setCoinCount(coinCount => coinCount + 10);
        if (coinCount >= 50) {
            setCoinCount(coinCount => coinCount-10);
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
        console.log(favoriteToggle);
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

    function handleClick(id) {
        setCoins(prevCoins => {
            let newCoins = prevCoins.map(coin => {
                if(coin.id === id) {
                    let newCoin = {...coin, isFavorite: !coin.isFavorite};
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
                if(coin.id === id) {
                    let newCoin = {...coin, isFavorite: !coin.isFavorite};
                    return newCoin;

                } 
                else {
                    return coin;
                }
            })

            return newCoins;
        })
    }
    
    React.useEffect(() => {
        //for now, we will pretend that we will be fetching from an API 
        const rows = [];
        const firstCoins = [];
        for (let x = 0; x < 50; x++) {
            rows.push(createData(false, x+1, 'Bitcoin', 'https://assets.coinlayer.com/icons/611.png', 'BTC', '$13,370', '19,000'));
            if (x < 10) {
                firstCoins.push(createData(false, x+1, 'Bitcoin', 'https://assets.coinlayer.com/icons/611.png', 'BTC', '$13,370', '19,000'));
            }
        }
        setAllCoins(rows);
        setCoins(firstCoins);
    }, [])

    const coinElements = coins.map((row) => (
        <TableRow
        key={row.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
        >
            <TableCell sx={{border: 0}}>
                <Star 
                isFavorite={row.isFavorite}
                toggleFavorite={() => handleClick(row.id)}
                />
            </TableCell>
            <TableCell sx={{border: 0}}>{row.id}</TableCell>
            <TableCell component="th" scope="row"  sx={{border: 0}}>
            <button className='coin-name-container'>
                <img src='https://assets.coinlayer.com/icons/611.png' width="30"></img>
                <h3>{row.name}</h3>
                <p>{row.symbol}</p>
            </button>
            </TableCell>
            <TableCell sx={{border: 0}}>{row.price}</TableCell>
            <TableCell sx={{border: 0}}>{row.supply}</TableCell>

        </TableRow>
    ))

    return (
        <div className="table-container">
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
    )
}