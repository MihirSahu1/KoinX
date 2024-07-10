"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TradingViewWidget from "./TradingViewWidget";

const GraphCard = ({ crypto }) => {
  const [currentCrypto, setCurrentCrypto] = useState(null);
  const [cryptoPrice, setCryptoPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${crypto}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCurrentCrypto(data);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };
    fetchData();
  }, [crypto]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=inr%2Cusd&include_24hr_change=true`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setCryptoPrice(data);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };
    fetchData();
  }, [crypto]);

  return (
    <>
      <div className="flex flex-row gap-[36px] mb-[18px] sm:hidden">
        {currentCrypto && (
          <div className="flex flex-row gap-2">
            <Image
              src={currentCrypto.image.small}
              alt={currentCrypto.name}
              width={40}
              height={36}
            />
            <div className="text-[24px] text-[#0B1426] font-[600] leading-[28px] flex items-center">
              {currentCrypto?.name}
            </div>
            <div className="text-[16px] font-[600] text-[#5D667B] leading-[19.2px] flex items-center">
              {currentCrypto?.symbol.toUpperCase()}
            </div>
          </div>
        )}
        <div className="w-[80px] h-[40px] font-[500] text-[16px] text-[#FFFFFF] flex items-center rounded-[8px] border-[1px] justify-center bg-[#808A9D]">
          Rank #{currentCrypto?.market_cap_rank}
        </div>
      </div>{" "}
      <div className="max-sm:border max-sm:border-[#DEE1E6] rounded-[8px] bg-[#FFFFFF] pl-[24px] pt-[24px] pr-[24px] pb-[33px] lg:min-w-[881px]  flex flex-col ">
        <div className="flex flex-row gap-[36px] mb-[40px] max-sm:hidden">
          {currentCrypto && (
            <div className="flex flex-row gap-2">
              <Image
                src={currentCrypto.image.small}
                alt={currentCrypto.name}
                width={40}
                height={36}
              />
              <div className="text-[24px] text-[#0B1426] font-[600] leading-[28px] flex items-center">
                {currentCrypto?.name}
              </div>
              <div className="text-[16px] font-[600] text-[#5D667B] leading-[19.2px] flex items-center">
                {currentCrypto?.symbol.toUpperCase()}
              </div>
            </div>
          )}
          <div className="w-[80px] h-[40px] font-[500] text-[16px] text-[#FFFFFF] flex items-center rounded-[8px] border-[1px] justify-center bg-[#808A9D]">
          Rank #{currentCrypto?.market_cap_rank}
          </div>
        </div>
        <div className="flex flex-row gap-[32px]">
          <div className="flex flex-col">
            <div className="text-[28px] leading-[38.4px] font-[600]">
              ${cryptoPrice?.[crypto]?.usd}
            </div>
            <div className="text-[16px] leading-[27px] font-[500]">
              ₹{cryptoPrice?.[crypto]?.inr}
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div
              className={`h-[28px] w-[84px] flex justify-center items-center gap-2 rounded-[4px] ${
                cryptoPrice?.[crypto]?.usd_24h_change < 0
                  ? "bg-[#f39696]"
                  : "bg-[#EBF9F4]"
              }`}
            >
              <Image
                src={
                  cryptoPrice?.[crypto]?.usd_24h_change < 0
                    ? "/redArrow.png"
                    : "/Polygon.svg"
                }
                alt={cryptoPrice?.[crypto]?.usd_24h_change < 0 ? "down" : "up"}
                width={11}
                height={8}
                
              />
              <div
                className={`${
                  cryptoPrice?.[crypto]?.usd_24h_change < 0
                    ? "text-[#ee3636]"
                    : "text-[#14B079]"
                } font-[500] text-[16px] leading-[19.36px]`}
              >
                {cryptoPrice?.[crypto]?.usd_24h_change.toFixed(2)}%
              </div>
            </div>

            <div className="text-[14px] leading-[27px] font-[500] text-[#768396]">
              (24h)
            </div>
          </div>
        </div>
        <div className="h-0 border border-[#DEE1E6] mt-[24px] mb-[24px]"></div>
        <TradingViewWidget crypto={crypto} />
      </div>
    </>
  );
};

export default GraphCard;
