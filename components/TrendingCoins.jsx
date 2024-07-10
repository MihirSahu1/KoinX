'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const TrendingCoins = () => {
  const [topThreeCoins, setTopThreeCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        if (!response.ok) {
          throw new Error('Failed to fetch trending coins');
        }
        const data = await response.json();
        const topCoins = data.coins.slice(0, 3).map(coin => coin.item);
        setTopThreeCoins(topCoins);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingCoins();
  }, []); 

  return (
    <div className='bg-[#FFFFFF] rounded-[8px] p-[24px] flex flex-col gap-[20px]'>
      <div className='text-[24px] leading-[28.8px] font-[600]'>Trending Coins (24h)</div>
        {topThreeCoins.map((coin, index) => (
          <div key={index} className='flex flex-row justify-between'>
            <div className='flex flex-row gap-[6px]'>
                <Image src={coin.small} alt={coin.name} width={28} height={24} className='rounded-[50%]'/>
                <div className='text-[16px] leading-[19.2px] font-[600] flex items-center'>{coin.name} ({coin.symbol})</div>
            </div>
            <div
              className={`h-[28px] w-[84px] flex justify-center items-center gap-2 rounded-[4px] ${
                coin.data.price_change_percentage_24h.usd < 0
                  ? "bg-[#f39696]"
                  : "bg-[#EBF9F4]"
              }`}
            >
              <Image
                src={
                  coin.data.price_change_percentage_24h.usd < 0
                    ? "/redArrow.png"
                    : "/Polygon.svg"
                }
                alt={coin.data.price_change_percentage_24h.usd < 0 ? "down" : "up"}
                width={11}
                height={8}
                
              />
              <div
                className={`${
                  coin.data.price_change_percentage_24h.usd < 0
                    ? "text-[#ee3636]"
                    : "text-[#14B079]"
                } font-[500] text-[16px] leading-[19.36px]`}
              >
                {coin.data.price_change_percentage_24h.usd.toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
     
    </div>
  );  
}

export default TrendingCoins;
