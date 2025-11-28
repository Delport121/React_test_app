import React, { createContext, useState, useContext, ReactNode } from 'react';

// 1. Define the shape of our context data
interface CurrencyContextType {
  vsCurrency: string;
  setVsCurrency: (currency: string) => void;
}

// 2. Create the actual Context object, setting default values
const CurrencyContext = createContext<CurrencyContextType>({
  vsCurrency: 'zar', // Default currency is ZAR
  setVsCurrency: () => {},
});

// 3. Create a Provider Component
// This component will hold the state and provide it to children
interface CurrencyProviderProps {
  children: ReactNode;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [vsCurrency, setVsCurrency] = useState('zar'); // The actual state

  return (
    <CurrencyContext.Provider value={{ vsCurrency, setVsCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

// 4. Create a custom hook for easy access
export const useCurrency = () => useContext(CurrencyContext);

export default CurrencyContext;