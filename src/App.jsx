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
    const [allCoins, setAllCoins] = React.useState([]);
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


    React.useEffect(() => {
      setAllCoins(data);
    })
    // React.useEffect(() => {
    //     //for now, we will pretend that we will be fetching from an API 
    //     // setAllCoins(data.crypto);
    //     Promise.all([
    //       fetch('http://api.coinlayer.com/list?access_key=e1f502ee8ff24808d2669766b28a3dd7').then(res => res.json()),
    //       fetch('http://api.coinlayer.com/api/live?access_key=e1f502ee8ff24808d2669766b28a3dd7').then(res => res.json()),
    //     ]).then(data => setAllCoins(() => {
    //       const coinArray = [];
    //       let counter = 0;
    //       for (const coin in data[0].crypto) {
    //         if (Object.hasOwn(data[0].crypto, coin)) {
    //           coinArray.push(data[0].crypto[coin]);
    //         }
    //       }

    //       for (let x = 0; x < coinArray.length; x++) {
    //         coinArray[x].isFavorite = false;
    //         coinArray[x].id = x;
    //         coinArray[x].price = 0;
    //       }

    //       for (const price in data[1].rates) {
    //         if (Object.hasOwn(data[1].rates, price)) {
              
    //           coinArray[counter].price = data[1].rates[price];  
    //         }
    //         counter++;
            
    //       }
    //       return coinArray;
    //     }));   
    // }, [])

  return (
    <div className="App">
      <Navbar />
      <Header 
        allCoins={allCoins}
      />
      <Table
        allCoins={allCoins}
        />

      <Footer />
      
    </div>
  )
}

export default App;
