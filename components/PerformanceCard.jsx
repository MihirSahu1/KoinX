import React, { useState, useEffect } from "react";
import Image from "next/image";

const PerformanceBar = ({ data }) => {
  const { low_24h, high_24h, current_price } = data?.market_data || {};
  const low = low_24h?.usd || 0;
  const high = high_24h?.usd || 0;
  const current = current_price?.usd || 0;
  const positionPercent =
    low !== high ? ((current - low) / (high - low)) * 100 : 0;

  return (
    <>
      <div className="flex flex-col gap-[10px] pb-[13px] sm:min-w-[112px]">
        <div className="pt-[6px] pr-[12px] font-[400] text-[13.78px] leading-[20px] flex items-center">
        {"Today's Low"}
        </div>
        <div className="sm:pr-[38px] pr-[20px] font-[500] text-[15.63px] leading-[22px] flex items-center">
          {low.toFixed(2)}
        </div>
      </div>
      <div className="relative w-full sm:max-w-xl min-w-[125px] max-w-[160px] my-auto">
        <div className="h-[4.63px] rounded overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-red-500 via-yellow-300 to-green-500"></div>
        </div>
        <div
          className="flex flex-col absolute items-center"
          style={{ left: `${positionPercent}%`, transform: "translateX(-50%)" }}
        >
          <Image
            src="/curr.svg"
            width={10}
            height={10}
            alt="arrow"
            className="mt-[1px]"
          />
          <div className="text-center mt-[6px]">{current.toFixed(2)}</div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] pb-[13px]">
        <div className="pt-[6px] pl-[12px] sm:pl-[12px] font-[400] text-[13.78px] leading-[20px] flex items-center justify-end">
        {"Today's High"}
        </div>
        <div className="sm:pl-[38px] pl-[20px] font-[500] text-[15.63px] leading-[22px] flex items-center">
          {high.toFixed(2)}
        </div>
      </div>
    </>
  );
};
const PerformanceBar2 = () => {
  return (
    <>
      <div className="flex flex-col gap-[10px] pb-[13px]">
        <div className="pt-[6px] pr-[12px] font-[400] text-[13.78px] leading-[20px] flex items-center">
          52W Low
        </div>
        <div className="sm:pr-[38px] pr-[20px] font-[500] text-[15.63px] leading-[22px] flex items-center">
          16,930.22
        </div>
      </div>
      <div className="relative w-full sm:max-w-xl min-w-[125px] max-w-[160px]  my-auto">
        <div className="h-[4.63px] rounded overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-red-500 via-yellow-300 to-green-500"></div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] pb-[13px]">
        <div className="pt-[6px] pl-[12px] font-[400] text-[13.78px] leading-[20px] flex items-center justify-end">
          52W High
        </div>
        <div className="sm:pl-[38px] pl-[20px]  font-[500] text-[15.63px] leading-[22px] flex items-center">
          69,743.83
        </div>
      </div>
    </>
  );
};

const PerformanceCard = ({crypto}) => {
  const [coinData, setCoinData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${crypto}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log( `https://api.coingecko.com/api/v3/coins/${crypto}`) 
          setCoinData(data);
          console.log(data);
        } else {
          console.error("Failed to fetch data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="font-[600] text-[24px] leading-[28.8px] flex  items-center">
        Performance
      </div>
      <div className="sm:p-4">
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-row">
            <PerformanceBar data={coinData} />
          </div>
          <div className="flex flex-row">
            <PerformanceBar2 data={coinData} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-row">
          <div className="text-[#44475B] font-[600] text-[18.91px] leading-[20px] flex items-center mr-1">
            Fundamentals
          </div>
          <Image src="/SVG.svg" width={20} height={20} alt="info" />
        </div>
        <div className="flex flex-row justify-between flex-wrap">
          <div className="flex flex-col max-w-[383px] w-[383px]">
            <div className="h-[54px] flex flex-row justify-between items-center border-b border-b-[##D3E0E6]">
              <div className="font-[500] text-[#768396] text-[14px] leading-[20px] flex items-center">
                Bitcoin Price
              </div>
              <div className="font-[500] text-[13px] leading-[20px] flex items-center text-[#111827]">
                ${coinData?.market_data?.current_price?.usd?.toFixed(0)}
              </div>
            </div>
            <div className="h-[54px] flex flex-row justify-between items-center border-b border-b-[##D3E0E6]">
              <div className="font-[500] text-[#768396] text-[14px] leading-[20px] flex items-center">
                24h Low / 24h High
              </div>
              <div className="font-[500] text-[13px] leading-[20px] flex items-center text-[#111827]">
                ${coinData?.market_data?.low_24h?.usd?.toFixed(0)} / $
                {coinData?.market_data?.high_24h?.usd?.toFixed(0)}
              </div>
            </div>
            <div className="h-[54px] flex flex-row justify-between items-center border-b border-b-[##D3E0E6]">
              <div className="font-[500] text-[#768396] text-[14px] leading-[20px] flex items-center">
                7d change
              </div>
              <div className="font-[500] text-[13px] leading-[20px] flex items-center text-[#111827]">
                {coinData?.market_data?.price_change_percentage_7d.toFixed(2)}%{" "}
              </div>
            </div>
            <div className="h-[54px] flex flex-row justify-between items-center border-b border-b-[##D3E0E6]">
              <div className="font-[500] text-[#768396] text-[14px] leading-[20px] flex items-center">
                Trading Volume
              </div>
              <div className="font-[500] text-[13px] leading-[20px] flex items-center text-[#111827]">
                ${coinData?.market_data?.total_volume?.usd?.toFixed(0)}
              </div>
            </div>
            <div className="h-[54px] flex flex-row justify-between items-center border-b border-b-[##D3E0E6]">
              <div className="font-[500] text-[#768396] text-[14px] leading-[20px] flex items-center">
                Market Cap Rank
              </div>
              <div className="font-[500] text-[13px] leading-[20px] flex items-center text-[#111827]">
                {coinData?.market_data?.market_cap_rank}
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-[383px] w-[383px]">
            <div className="h-[54px] flex flex-row justify-between items-center border-b border-b-[##D3E0E6]">
              <div className="font-[500] text-[#768396] text-[14px] leading-[20px] flex items-center">
                Market Cap
              </div>
              <div className="font-[500] text-[13px] leading-[20px] flex items-center text-[#111827]">
                $ {coinData?.market_data?.market_cap?.usd.toFixed(0)}
              </div>
            </div>
            <div className="h-[54px] flex flex-row justify-between items-center border-b border-b-[##D3E0E6]">
              <div className="font-[500] text-[#768396] text-[14px] leading-[20px] flex items-center">
                Market Cap Dominance
              </div>
              <div className="font-[500] text-[13px] leading-[20px] flex items-center text-[#111827]">
                {coinData?.market_data?.market_cap_change_percentage_24h.toFixed(
                  2
                )}
                %
              </div>
            </div>
            <div className="h-[54px] flex flex-row justify-between items-center border-b border-b-[##D3E0E6]">
              <div className="font-[500] text-[#768396] text-[14px] leading-[20px] flex items-center">
                Volume / Market Cap
              </div>
              <div className="font-[500] text-[13px] leading-[20px] flex items-center text-[#111827]">
                ${coinData?.market_data?.max_supply?.toFixed(0)}
              </div>
            </div>
            <div className="h-[54px] flex flex-row justify-between items-center border-b border-b-[##D3E0E6]">
              <div className="font-[500] text-[#768396] text-[14px] leading-[20px] flex items-center">
                All-Time High
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-end">
                  <div className="font-[500] text-[13px] leading-[20px] flex items-center text-[#111827]">
                    ${coinData?.market_data?.ath?.usd.toFixed(0)}
                  </div>
                  <div className="font-[500] text-[13px] leading-[20px] flex items-center text-[#ff4646] ml-[2px]">
                    {coinData?.market_data?.ath_change_percentage?.usd.toFixed(
                      1
                    )}
                    %
                  </div>
                </div>
                <div className="font-[400] text-[11.2px] leading-[20px] text-[#111827]">{formatDate(coinData?.market_data?.ath_date?.usd)}</div>
              </div>
            </div>
            <div className="h-[54px] flex flex-row justify-between items-center border-b border-b-[##D3E0E6]">
              <div className="font-[500] text-[#768396] text-[14px] leading-[20px] flex items-center">
                All-Time Low
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-end">
                  <div className="font-[500] text-[13px] leading-[20px] flex items-center text-[#111827]">
                    ${coinData?.market_data?.atl?.usd.toFixed(0)}
                  </div>
                  <div className="font-[500] text-[13px] leading-[20px] flex items-center text-[#2cad48] ml-[2px]">
                    {coinData?.market_data?.atl_change_percentage?.usd.toFixed(
                      1
                    )}
                    %
                  </div>
                </div>
                <div className="font-[400] text-[11.2px] leading-[20px] text-[#111827] flex justify-end">{formatDate(coinData?.market_data?.atl_date?.usd)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceCard;
