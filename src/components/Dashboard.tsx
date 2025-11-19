// src/components/Dashboard.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';


const Dashboard = () => {

  // 1. Define State to hold the data
  const [coins, setCoins] = useState<any[]>([]);
  const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1';

  // 2. Define the side effect to fetch data
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json(); 
        setCoins(data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCoins();
  }, []);

  // 3. Render the data and UI 
return (
    <div className="dashboard">
      <h2 className="title">Top 10 Cryptocurrencies (ZAR)</h2>

      {coins.length === 0 ? (
        <div className="loading">Loading market data...</div>
      ) : (
        <div className="coin-grid">
          {coins.map((coin, index) => (
            <Link 
              to={`/coin/${coin.id}`} 
              key={coin.id} 
              className="coin-card"
            >
              <div className="coin-header">
                <div>
                  <span className="coin-rank">#{index + 1}</span>
                  <span className="coin-name">{coin.name}</span>
                </div>
                <span className="coin-symbol">{coin.symbol.toUpperCase()}</span>
              </div>

              <div className="coin-price">
                <div>
                  <div className="price-label">Price</div>
                  <span>R {coin.current_price.toLocaleString("en-ZA")}</span>
                </div>
                <div>
                  <div className="price-label">Market Cap</div>
                  <span className="coin-market-cap">R {coin.market_cap.toLocaleString("en-ZA")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
  //   return (
  //   <div className="dashboard">
  //     <h2>Top 10 Cryptocurrencies (ZAR)</h2>
  //     {coins.length === 0 ? (
  //         <p>Loading market data...</p> 
  //     ) : (
  //       <ul className="coin-list">
  //         {coins.map((coin) => (
  //           <li key={coin.id} className="coin-item">
  //             {/* Use the Link component to navigate */}
  //             <Link to={`/coin/${coin.id}`}>
  //             <strong>{coin.name} ({coin.symbol.toUpperCase()})</strong> - R {coin.current_price.toLocaleString('en-ZA')}
  //               </Link>
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );
};

export default Dashboard;