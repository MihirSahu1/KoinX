'use client'
import React, { useEffect, useRef, memo, useState } from "react";

function TradingViewWidget({ crypto }) {
  const container = useRef();
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(null);
  const [widgetHeight, setWidgetHeight] = useState("400");
  const timeFrames = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];

  useEffect(() => {
    const updateWidgetHeight = () => {
      setWidgetHeight(window.innerWidth < 500 ? "217" : "400");
    };
    updateWidgetHeight(); 

    window.addEventListener('resize', updateWidgetHeight); 

    return () => {
      window.removeEventListener('resize', updateWidgetHeight);
    };
  }, []);
  useEffect(() => {
    const currentContainer = container.current;
    currentContainer.innerHTML = '';
    const symbolMap = {
      bitcoin: "BITSTAMP:BTCUSD",
      ethereum: "BITSTAMP:ETHUSD",
      solana:"COINBASE:SOLUSD",
      tether:"UNISWAP3ETH:TETHERWETH"
    };

    const symbol = symbolMap[crypto] || "BITSTAMP:BTCUSD";
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": widgetHeight,
      "symbol": symbol,
      "interval": selectedTimeFrame || "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "3",
      "locale": "en",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "save_image": false,
      "calendar": false,
      "hide_volume": true,
      "support_host": "https://www.tradingview.com"
    });

    currentContainer.appendChild(script);

    return () => {
      currentContainer.innerHTML = '';
    };
  }, [selectedTimeFrame, crypto, widgetHeight]);

  return (
    <>
      <div className="flex flex-row justify-between max-sm:hidden">
        <div className="text-[16px] leading-[19.5px] text-[#0B1426] font-[600] mb-[40px]">
        {crypto.charAt(0).toUpperCase() + crypto.slice(1)} Price Chart (USD)
        </div>
        <div>
          {timeFrames.map((timeFrame, index) => (
            <button
              key={index}
              className={`p-2 text-[13px] font-[500] text-[#5D667B] ${selectedTimeFrame === timeFrame ? "bg-[#E2ECFE] rounded-[15px]  text-[#0141CF]" : ""}`}
              onClick={() => setSelectedTimeFrame(timeFrame)}
            >
              {timeFrame}
            </button>
          ))}
        </div>
      </div>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </>
  );
}

export default memo(TradingViewWidget);
