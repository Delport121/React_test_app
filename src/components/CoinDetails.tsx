// src/components/CoinDetails.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
      <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
      <p>Current Price (ZAR): R {coin.market_data.current_price.zar.toLocaleString('en-ZA')}</p>
      <p>Market Cap Rank: #{coin.market_data.market_cap_rank}</p>
      {/* You now have access to all the detailed data! */}
    </div>
  );
};

export default CoinDetails;