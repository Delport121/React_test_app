# Crypto App

A React-based cryptocurrency dashboard that displays real-time market data from the CoinGecko API. View the top 10 cryptocurrencies, explore detailed coin information, and switch between multiple currencies.

## Features

- **Dashboard View**: Display the top 10 cryptocurrencies ranked by market cap
- **Coin Details**: View detailed information for each cryptocurrency including:
  - Current price and 24h price change
  - Market cap, trading volume, and supply data
  - All-time high and low prices
  - 7-day price history chart
  - Description and external links
- **Multi-Currency Support**: Switch between ZAR, USD, EUR, and BTC

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

To verify your installation, run:
```bash
node --version
npm --version
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Delport121/React_test_app.git
   cd React_test_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
crypto-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── CoinDetails.tsx      # Detailed coin view with charts
│   │   ├── CoinDetails.css
│   │   ├── CurrencySelector.tsx # Currency dropdown component
│   │   ├── CurrencySelector.css
│   │   ├── Dashboard.tsx        # Main dashboard with coin list
│   │   └── Dashboard.css
│   ├── context/
│   │   └── CurrencyContext.tsx  # Global currency state management
│   ├── App.tsx                  # Main app with routing
│   ├── index.tsx                # Entry point
│   └── ...
├── package.json
├── tsconfig.json
└── README.md
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **React Router DOM** - Client-side routing
- **Recharts** - Charting library for price history graphs
- **CoinGecko API** - Free cryptocurrency data API

## API Reference

This app uses the free [CoinGecko API](https://www.coingecko.com/en/api) which does not require an API key. Endpoints used:

- `/coins/markets` - Get top coins by market cap
- `/coins/{id}` - Get detailed coin information
- `/coins/{id}/market_chart` - Get historical price data

**Note**: The free API has rate limits. If you encounter errors, wait a moment and refresh.

## Acknowledgments

- [CoinGecko](https://www.coingecko.com/) for providing the free cryptocurrency API
- [Create React App](https://create-react-app.dev/) for the project bootstrapping
