"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Trending = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);

  const handleScrollLeft1 = () => {
    if (scrollContainerRef1.current) {
      scrollContainerRef1.current.scrollBy({ left: -456, behavior: "smooth" });
    }
  };
  const handleScrollRight1 = () => {
    if (scrollContainerRef1.current) {
      scrollContainerRef1.current.scrollBy({ left: 456, behavior: "smooth" });
    }
  };

  // Handlers for the second scrolling container
  const handleScrollLeft2 = () => {
    if (scrollContainerRef2.current) {
      scrollContainerRef2.current.scrollBy({ left: -456, behavior: "smooth" });
    }
  };
  const handleScrollRight2 = () => {
    if (scrollContainerRef2.current) {
      scrollContainerRef2.current.scrollBy({ left: 456, behavior: "smooth" });
    }
  };


  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch trending coins");
        }
        const data = await response.json();
        console.log(data.coins);
        setTrendingCoins(data.coins);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingCoins();
  }, []);
  return (
    <div className="flex flex-col items-center sm:p-[58px] bg-[#FFFFFF] w-full gap-[34px]">
      <div className="relative flex flex-col gap-1 sm:gap-[20px] max-sm:max-w-full sm:max-w-[1300px]">
        <div className="font-[600] text-[18px] sm:text-[24px] leading-[36px] flex items-center text-[#202020]">
          You May Also Like
        </div>
        <div className=" flex flex-row gap-[10px] overflow-x-scroll overflow-y-hidden scrollbar-hide"  ref={scrollContainerRef1}>
          {trendingCoins.map((coin, index) => (
            <div
              key={index}
              className="sm:p-[17px] p-[10px] max-sm:min-w-[158px] sm:min-w-[252px] border-[1px] border-[#E3E3E3] rounded-[10px]"
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-[3px]">
                    <Image
                      src={coin.item.thumb}
                      alt={coin.item.name}
                      width={26}
                      height={26}
                      className="rounded-[50%] max-sm:hidden"
                    />
                    <Image
                      src={coin.item.thumb}
                      alt={coin.item.name}
                      width={16}
                      height={16}
                      className="rounded-[50%] sm:hidden"
                    />
                    <div className="font-[400] text-[10px] sm:text-[16px] leading-[19.36px] flex items-center text-[#202020]">
                      {coin.item.symbol}
                    </div>
                    <div
                      className={`font-[400] text-[7.57px] sm:text-[12px] leading-[14.52px] flex items-center rounded-[4px] p-[2px] ${
                        coin.item.data.price_change_percentage_24h.usd < 0
                          ? "bg-[#f39696] text-[#ee3636]"
                          : "bg-[#EBF9F4] text-[#32BE88]"
                      }`}
                    >
                      {coin.item.data.price_change_percentage_24h.usd.toFixed(
                        2
                      )}
                      %
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ">
                    <div className="font-[500] text-[12.62px] sm:text-[20px] leading-[24px] flex items-center mb-[2px]">{coin.item.data.price}</div>
                    <Image src={coin?.item?.data?.sparkline} alt="graph" width={200} height={60} className="max-sm:hidden" />
                    <Image src={coin?.item?.data?.sparkline} alt="graph" width={126} height={37.85} className="sm:hidden" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
            onClick={handleScrollRight1}
            className="w-[34px] h-[34px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center absolute bottom-[60px] sm:bottom-[70px] left-[310px] sm:left-[1280px] shadow-custom cursor-pointer"
          >
            <Image src="/Vector.svg" width={7.63} height={12.72} alt="arrow" />
          </button>
        <button
            onClick={handleScrollLeft1}
            className="w-[34px] h-[34px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center absolute bottom-[60px] sm:bottom-[70px] left-[15px] sm:left-[-15px] shadow-custom cursor-pointer"
          >
            <Image src="/Vector.svg" width={7.63} height={12.72} alt="arrow" className="rotate-180" />
          </button>
      </div>
      <div className="relative  flex flex-col gap-1 sm:gap-[20px] max-sm:max-w-full sm:max-w-[1300px]">
        <div className="font-[600] text-[18px] sm:text-[24px] leading-[36px] flex items-center text-[#202020]">
          Trending Coins
        </div>
        <div className=" flex flex-row gap-[10px] overflow-x-scroll overflow-y-hidden scrollbar-hide"  ref={scrollContainerRef2}>
          {trendingCoins.map((coin, index) => (
            <div
              key={index}
              className="sm:p-[17px] p-[10px] max-sm:min-w-[158px] sm:min-w-[252px] border-[1px] border-[#E3E3E3] rounded-[10px]"
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-[3px]">
                  <Image
                      src={coin.item.thumb}
                      alt={coin.item.name}
                      width={26}
                      height={26}
                      className="rounded-[50%] max-sm:hidden"
                    />
                    <Image
                      src={coin.item.thumb}
                      alt={coin.item.name}
                      width={16}
                      height={16}
                      className="rounded-[50%] sm:hidden"
                    />
                    <div className="font-[400] text-[10px] sm:text-[16px] leading-[19.36px] flex items-center text-[#202020]">
                      {coin.item.symbol}
                    </div>
                    <div
                      className={`font-[400] text-[7.57px] sm:text-[12px] leading-[14.52px] flex items-center rounded-[4px] p-[2px] ${
                        coin.item.data.price_change_percentage_24h.usd < 0
                          ? "bg-[#f39696] text-[#ee3636]"
                          : "bg-[#EBF9F4] text-[#32BE88]"
                      }`}
                    >
                      {coin.item.data.price_change_percentage_24h.usd.toFixed(
                        2
                      )}
                      %
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ">
                    <div className="font-[500] text-[12.62px] sm:text-[20px] leading-[24px] flex items-center mb-[2px]">{coin.item.data.price}</div>
                    <Image src={coin?.item?.data?.sparkline} alt="graph" width={200} height={60} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
            onClick={handleScrollRight2}
            className="w-[34px] h-[34px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center absolute bottom-[60px] sm:bottom-[70px] left-[310px] sm:left-[1280px] shadow-custom cursor-pointer"
          >
            <Image src="/Vector.svg" width={7.63} height={12.72} alt="arrow" />
          </button>
        <button
            onClick={handleScrollLeft2}
            className="w-[34px] h-[34px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center absolute bottom-[60px] sm:bottom-[70px] left-[15px] sm:left-[-15px] shadow-custom cursor-pointer"
          >
            <Image src="/Vector.svg" width={7.63} height={12.72} alt="arrow" className="rotate-180" />
          </button>
      </div>
    </div>
  );
};

export default Trending;
