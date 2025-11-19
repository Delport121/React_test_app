// src/components/CoinDetails.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CoinDetails.css';

const CoinDetails = () => {
  const { id } = useParams<{ id: string }>(); // Get the coin ID from the URL params

  // 1. Define State to hold the single coin object
  const [coin, setCoin] = useState<any>({}); 

  // 2. Fetch the data using the ID
  useEffect(() => {
    if (!id) return; 

    const API_URL = `https://api.coingecko.com/api/v3/coins/${id}`;
    
    const fetchCoinDetails = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCoin(data);
      } catch (error) {
        console.error("Error fetching coin details:", error);
      }
    };

    fetchCoinDetails();
  }, [id]); // This effect runs whenever the 'id' changes

  // 3. Render the coin details
  // // Display a loading message until we have the name property
  if (!coin || !coin.name) {
      return <h1>Loading {id} details...</h1>;
  }
  
  // // Display some of the required details
  return (
    <div className="coin-details">
      <div className="coin-header-detail">
        {coin.image?.large && <img src={coin.image.large} alt={coin.name} className="coin-logo" />}
        <div>
          <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
          <p className="coin-rank">Rank #{coin.market_data.market_cap_rank}</p>
        </div>
      </div>

      <div className="price-section">
        <h2>Current Price</h2>
        <p className="current-price">R {coin.market_data.current_price.zar.toLocaleString('en-ZA')}</p>
        <div className="price-change">
          <span className={coin.market_data.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
            {coin.market_data.price_change_percentage_24h >= 0 ? '▲' : '▼'} 
            {Math.abs(coin.market_data.price_change_percentage_24h).toFixed(2)}% (24h)
          </span>
        </div>
      </div>

      <div className="market-stats">
        <h2>Market Statistics</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Market Cap</span>
            <span className="stat-value">R {coin.market_data.market_cap.zar.toLocaleString('en-ZA')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">24h Volume</span>
            <span className="stat-value">R {coin.market_data.total_volume.zar.toLocaleString('en-ZA')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Circulating Supply</span>
            <span className="stat-value">{coin.market_data.circulating_supply?.toLocaleString('en-ZA')} {coin.symbol.toUpperCase()}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Total Supply</span>
            <span className="stat-value">
              {coin.market_data.total_supply ? coin.market_data.total_supply.toLocaleString('en-ZA') : 'N/A'} {coin.symbol.toUpperCase()}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">All-Time High</span>
            <span className="stat-value">R {coin.market_data.ath.zar.toLocaleString('en-ZA')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">All-Time Low</span>
            <span className="stat-value">R {coin.market_data.atl.zar.toLocaleString('en-ZA')}</span>
          </div>
        </div>
      </div>

      {coin.description?.en && (
        <div className="description-section">
          <h2>About {coin.name}</h2>
          <div 
            className="description-text" 
            dangerouslySetInnerHTML={{ __html: coin.description.en }}
          />
        </div>
      )}

      <div className="links-section">
        <h2>Links</h2>
        <div className="links-grid">
          {coin.links?.homepage?.[0] && (
            <a href={coin.links.homepage[0]} target="_blank" rel="noopener noreferrer" className="link-button">
              🌐 Website
            </a>
          )}
          {coin.links?.blockchain_site?.[0] && (
            <a href={coin.links.blockchain_site[0]} target="_blank" rel="noopener noreferrer" className="link-button">
              🔗 Blockchain Explorer
            </a>
          )}
          {coin.links?.repos_url?.github?.[0] && (
            <a href={coin.links.repos_url.github[0]} target="_blank" rel="noopener noreferrer" className="link-button">
              💻 GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;