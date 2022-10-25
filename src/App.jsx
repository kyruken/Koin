import React from 'react'
import './App.css'

import Navbar from './components/navbar.jsx';
import Header from './components/header.jsx';
import Table from './components/table.jsx';
import Footer from './components/footer.jsx';

import data from './data.js';

function createData(isFavorite, id, name, icon, symbol, price, supply) {
  return { isFavorite, id, name, icon, symbol, price, supply };
}

let favoriteToggle = false;

function App() {
     //we will have a state, coins, to store the 10 coins that display on the page
    //we will have a second state called allCoins, to hold our API called coin data
    //lastly, 3rd state will be the coin count that displays on the page
    const [allCoins, setAllCoins] = React.useState([]);

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

    React.useEffect(() => {
        //for now, we will pretend that we will be fetching from an API 
        setAllCoins(data.crypto);
        // fetch('http://api.coinlayer.com/list=f510e7f246205c00ad43dcb1f94bb00c')
        //   .then(res => res.json())
        //   .then(data => setAllCoins(data))
    }, [])

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Table
        allCoins={allCoins}
      />

      <Footer />
      
    </div>
  )
}

export default App;
