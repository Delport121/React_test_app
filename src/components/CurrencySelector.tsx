import React from 'react';
import { useCurrency } from '../context/CurrencyContext'; // Import the setter function
import './CurrencySelector.css';

const currencies = [
  'zar',
  'usd',
  'eur',
  'btc', // Bonus: Allowing selection of BTC as a base currency
];

const CurrencySelector: React.FC = () => {
  // Pull the current currency value and the setter function from the global context
  const { vsCurrency, setVsCurrency } = useCurrency();

  // Handle the change event from the dropdown
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Call the global setter function to update the state
    setVsCurrency(event.target.value); 
  };

  return (
    <div className="currency-selector">
      <label htmlFor="currency-select" className="currency-label">Compare to:</label>
      <select id="currency-select" className="currency-dropdown" value={vsCurrency} onChange={handleChange}>
        {currencies.map((currency) => (
          // Create an option tag for each currency
          <option key={currency} value={currency}>
            {currency.toUpperCase()} 
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;