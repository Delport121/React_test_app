// src/components/CoinDetails.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
  const { id } = useParams<{ id: string }>(); 
  // State is initialized as an empty object
  const [coin, setCoin] = useState<any>({}); 

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
  }, [id]); 

  // Display a loading message until we have the name property
  if (!coin || !coin.name) {
      return <h1>Loading {id} details...</h1>;
  }
  
  // Display some of the required details
  return (
    <div className="coin-details">
      <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
      <p>Current Price (ZAR): R {coin.market_data.current_price.zar.toLocaleString('en-ZA')}</p>
      <p>Market Cap Rank: #{coin.market_data.market_cap_rank}</p>
      {/* You now have access to all the detailed data! */}
    </div>
  );
};

export default CoinDetails;