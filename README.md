# KoinX Frontend Project

This project was developed as part of the frontend intern assignment for KoinX, focusing on converting a specific Figma design to a functional web application using Next.js. The application integrates with the CoinGecko API to display cryptocurrency data and incorporates TradingView charts for visualizing Bitcoin's price movements.

## Features

### Cryptocurrency Data Display
- Fetches and displays the price of Bitcoin in USD and INR, including the 24-hour price change, using the CoinGecko `/simple/price` API.

### Trending Coins
- Utilizes CoinGecko’s `/search/trending` API to display the top 3 trending coins in a "Trending Coins (24h)" component.

### TradingView Charts
- Embeds Chart.js library & TradingView’s advanced chart widget to display BTCUSD charts, tailored to match the design specified in the Figma design closely.
  

### Responsive Design
- Ensures the UI is responsive and adheres to the layout and aesthetics outlined in the provided Figma design.

## Technologies Used

- **Framework**: React.js / Next.js
- **APIs**: CoinGecko API for cryptocurrency data, TradingView Widget for BTCUSD charts
- **Deployment**: Hosted on Vercel for seamless access and demonstration
- **Design**: Implementation based on a specified Figma design

