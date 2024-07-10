import About from "@/components/About";
import GetStartedCard from "@/components/GetStartedCard";
import GraphCard from "@/components/GraphCard";
import Sentiment from "@/components/Sentiment";
import TabComponent from "@/components/TabComponent";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";
import Trending from "@/components/Trending";
import TrendingCoins from "@/components/TrendingCoins";
import Image from "next/image";
import React from "react";

const page = ({ params }) => {
  return (
    <div className="flex flex-col items-center gap-[78px] max-sm:w-full">
      <div className="sm:pl-[56px] pl-[14px]  pr-[14px] sm:pr-[56px] sm:mt-[18px]  mt-[23.25px] flex flex-col max-w-[1408px] max-sm:w-full">
        <div className="flex flex-row mb-[18px] gap-[10px]">
          <div className="text-[14px] text-[#3E5765] leading-[17px] font-[400] flex items-center">
            Cryptocurrencies
          </div>
          <div className="flex items-center">
            {" "}
            <Image src="/before.svg" alt="arrow" width={11} height={11} />
          </div>
          <div className="text-[14px] leading-[17px] font-[500] flex items-center text-[#0F1629]">
            {params.crypto.charAt(0).toUpperCase() + params.crypto.slice(1)}
          </div>
        </div>
        <div className="flex flex-wrap flex-row gap-[20px]">
          <div className="flex flex-col gap-[20px] max-sm:max-w-full">
            <GraphCard crypto={params.crypto} />
            <TabComponent crypto={params.crypto} />
            <Sentiment />
            <About crypto={params.crypto} />
            <Tokenomics />
            <Team />
          </div>
          <div className="flex flex-col mx-auto gap-[20px]">
            <GetStartedCard />
            <TrendingCoins />
          </div>
        </div>
      </div>
      <div className="w-full max-sm:hidden">
        <Trending />
      </div>
    </div>
  );
};

export default page;
