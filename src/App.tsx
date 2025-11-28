// src/App.tsx (Routing Setup)

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'; 
import CoinDetails from './components/CoinDetails'; 
import { CurrencyProvider } from './context/CurrencyContext'

function App() {
  return (
    <CurrencyProvider>
      <BrowserRouter>
        <Routes>

          {/* 1. Dashboard Route (The Home Page) */}
          <Route path="/" element={<Dashboard />} />

          {/* 2. Details Page Route (Dynamic ID in the URL) */}
          <Route path="/coin/:id" element={<CoinDetails />} /> 

        </Routes>
      </BrowserRouter>
    </CurrencyProvider>
  );
}

export default App;