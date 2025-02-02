import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../context/CoinContext';
import { Coin } from "../context/CoinContext"; // Ensure the import path is correct

const Home = () => {

  const context = useContext(CoinContext);

  if (!context) {
    return <div>Loading...</div>; // Handle null case
  }

  const { allCoin, currency } = context; // Now context is guaranteed to be non-null

  const [displayCoin, setDisplayCoin] = useState<Coin[]>([]); // Specify Coin[] as the type

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  const renderPriceChart = (priceChart: number[][]) => {
    // This function will render the 7-day price chart
    return (
      <div className="priceChart">
        {priceChart.map((data, index) => {
          const date = new Date(data[0]);
          const price = data[1];
          return (
            <div key={index} className="priceChartData">
              <span>{date.toLocaleDateString()}</span>
              <span>{currency.symbol}{price.toFixed(2)}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className='home'>
      <div className='hero'>
        <h1>Trade Crypto Seamlessly & Securely</h1>
        <h6>Buy, sell, and trade your favorite cryptocurrencies with low fees and high security.</h6>
      </div>
      <div className='cryptoTable'>
        <div className='tableLayout'>
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24h%</p>
          <p className='marketCap'>Market Cap</p>
          <p className='last7Days'>Last 7 Days</p>
        </div>

        {displayCoin.slice(0, 20).map((item, index) => (
          <div className='tableLayout' key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt={item.name} />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
            <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>
            <p className='marketCap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
