// src/components/Dashboard.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import CurrencySelector from './CurrencySelector';
import './Dashboard.css';


const Dashboard = () => {

  // 1. Define State to hold the data adn global currency state
  const [coins, setCoins] = useState<any[]>([]);
  const { vsCurrency } = useCurrency();

  // 2. Define the side effect to fetch data
  useEffect(() => {

    const API_URL = 
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=10&page=1`;

    const fetchCoins = async () => {
      try {
        const response = await fetch(API_URL); // The URL now uses vsCurrency
        const data = await response.json(); 
        setCoins(data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCoins();
  }, [vsCurrency]);

  // Currency symbol mapping
  const getCurrencySymbol = (currency: string) => {
    const symbols: { [key: string]: string } = {
      zar: 'R',
      usd: '$',
      eur: '€',
      btc: '₿',
    };
    return symbols[currency] || currency.toUpperCase();
  };

  // 3. Render the data and UI 
  return (
    <div className="dashboard">
      <h2 className="title">Top 10 Cryptocurrencies ({vsCurrency.toUpperCase()})</h2>

      <CurrencySelector />

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
              <div className="coin-rank-large">#{index + 1}</div>
              <div className="coin-content">
                <div className="coin-header">
                  <div className="coin-header-left">
                    <img src={coin.image} alt={coin.name} className="coin-image" />
                    <span className="coin-name">{coin.name}</span>
                  </div>
                  <span className="coin-symbol">{coin.symbol.toUpperCase()}</span>
                </div>

                <div className="coin-price">
                  <div>
                    <div className="price-label">Price</div>
                    <span>{getCurrencySymbol(vsCurrency)} {coin.current_price.toLocaleString()}</span>
                  </div>
                  <div>
                    <div className="price-label">Market Cap</div>
                    <span className="coin-market-cap">{getCurrencySymbol(vsCurrency)} {coin.market_cap.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;