// src/App.tsx (Routing Setup)

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'; 
import CoinDetails from './components/CoinDetails'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Dashboard Route (The Home Page) */}
        <Route path="/" element={<Dashboard />} />
        
        {/* 2. Details Page Route (Dynamic ID in the URL) */}
        {/* The ':id' is a dynamic parameter that changes based on the coin clicked */}
        <Route path="/coin/:id" element={<CoinDetails />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;