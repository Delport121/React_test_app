// src/components/Dashboard.tsx

import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [coins, setCoins] = useState<any[]>([]);
  const API_URL = 
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1';

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

  return (
    <div className="dashboard">
      <h2>Top 10 Cryptocurrencies (ZAR)</h2>
      {coins.length === 0 ? (
          <p>Loading market data...</p> 
      ) : (
        <ul className="coin-list">
          {coins.map((coin) => (
            <li key={coin.id} className="coin-item">
              {/* This item will eventually be clickable to navigate */}
              <strong>{coin.name} ({coin.symbol.toUpperCase()})</strong> - R {coin.current_price.toLocaleString('en-ZA')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;