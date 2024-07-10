"use client";
import React, { useRef } from "react";
import Image from "next/image";

const Sentiment = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 456, behavior: "smooth" });
    }
  };
  return (
    <div className="max-sm:border max-sm:border-[#DEE1E6] max-w-[881px] rounded-[8px] bg-[#FFFFFF] flex flex-col sm:p-[24px] px-[10px] py-[16px]">
      {" "}
      <div className="flex flex-col gap-[17px]">
        <div className="font-[600] text-[24px] leading-[28.8px] flex  items-center">
          Sentiment
        </div>
        <div className="flex flex-row">
          <div className="font-[600] text-[18.91px] leading-[20px] flex items-center mr-1 text-[#44475B]">
            Key Events
          </div>
          <Image src="/SVG.svg" width={20} height={20} alt="info" />
        </div>
        <div className="h-[204px]">
          {" "}
          <div
            className="flex flex-row gap-[14px] overflow-x-scroll overflow-y-hidden scrollbar-hide"
            ref={scrollContainerRef}
          >
            <div className="sm:w-[456px] w-[319px] min-w-[319px] sm:min-w-[456px] h-[204px] rounded-[12px] px-[18px] pt-[18px] pb-[38px] bg-[#E8F4FD]">
              <div className="flex flex-row gap-2">
                <Image
                  src="/Sent1.svg"
                  width={44}
                  height={44}
                  alt="arrow"
                  className="relative bottom-[55px] max-sm:hidden"
                />
                <Image
                  src="/Sent1.svg"
                  width={30}
                  height={30}
                  alt="arrow"
                  className="relative bottom-[55px] sm:hidden"
                />
                <div className="flex flex-col gap-2">
                  <div className="font-[500] text-[12px] sm:text-[14px] leading-[20px] flex items-center">
                    Lorem ipsum dolor sit amet consectetur. Dui vel quis
                    dignissim mattis enim tincidunt.
                  </div>
                  <div className="font-[400] text-[10px] sm:text-[14px] leading-[20px] flex items-center text-[#3E5765]">
                    Lorem ipsum dolor sit amet consectetur. Ac phasellus risus
                    est faucibus metus quis. Amet sapien quam viverra adipiscing
                    condimentum. Ac consectetur et pretium in a bibendum in. Sed
                    vitae sit nisi viverra natoque lacinia libero enim.
                  </div>
                </div>
              </div>
            </div>
            <div className=" sm:w-[456px] w-[319px] min-w-[319px] sm:min-w-[456px] h-[204px] rounded-[12px] px-[18px] pt-[18px] pb-[38px] bg-[#E8F4FD]">
              <div className="flex flex-row gap-2">
                <Image
                  src="/Sent2.svg"
                  width={44}
                  height={44}
                  alt="arrow"
                  className="relative bottom-[55px] max-sm:hidden"
                />
                <Image
                  src="/Sent2.svg"
                  width={30}
                  height={30}
                  alt="arrow"
                  className="relative bottom-[55px] sm:hidden"
                />
                <div className="flex flex-col gap-2">
                  <div className="font-[500] text-[12px] sm:text-[14px] leading-[20px] flex items-center">
                    Lorem ipsum dolor sit amet consectetur. Dui vel quis
                    dignissim mattis enim tincidunt.
                  </div>
                  <div className="font-[400] text-[10px] sm:text-[14px] leading-[20px] flex items-center text-[#3E5765]">
                    Lorem ipsum dolor sit amet consectetur. Ac phasellus risus
                    est faucibus metus quis. Amet sapien quam viverra adipiscing
                    condimentum. Ac consectetur et pretium in a bibendum in. Sed
                    vitae sit nisi viverra natoque lacinia libero enim.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleScroll}
            className="w-[60px] h-[60px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center relative bottom-[130px] left-[760px] max-sm:hidden"
          >
            <Image src="/Vector.svg" width={7.63} height={12.72} alt="arrow" />
          </button>
        </div>
        <div className="flex flex-col gap-[24px] mt-[16px]">
          <div className="flex flex-row">
            <div className="font-[600] text-[18.91px] leading-[20px] flex items-center mr-1 text-[#44475B]">
              Analyst Estimates
            </div>
            <Image src="/SVG.svg" width={20} height={20} alt="info" />
          </div>
          <div className="flex flex-row gap-2 sm:gap-[40px]">
            <div className="w-[120px] h-[120px] rounded-[50%] bg-[#EBF9F4] flex justify-center items-center">
                <div className="flex flex-row">
                    <div className="font-[500] text-[36.41px] leading-[44px] flex items-center text-[#0FBA83]">76</div>
                    <div className="font-[500] text-[16px] leading-[22px] flex items-center text-[#0FBA83]">%</div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center h-[38px] gap-[10px]">
                    <div className="font-[500] text-[15px] leading-[22px] flex items-center text-[#7C7E8C]">Buy</div>
                    <div className="sm:w-[349.14px] w-[139px] h-[8px] rounded-[2px] bg-[#00B386] ml-[15px]"></div>
                    <div className="font-[500] text-[15px] leading-[22px] flex items-center text-[#7C7E8C]">76%</div>
                </div>
                <div className="flex flex-row items-center h-[38px] gap-[10px]">
                    <div className="font-[500] text-[15px] leading-[22px] flex items-center text-[#7C7E8C]">Hold</div>
                    <div className="w-[33px] h-[8px] rounded-[2px] bg-[#C7C8CE] ml-[11px]"></div>
                    <div className="font-[500] text-[15px] leading-[22px] flex items-center text-[#7C7E8C]">8%</div>
                </div>
                <div className="flex flex-row items-center h-[38px] gap-[10px]">
                    <div className="font-[500] text-[15px] leading-[22px] flex items-center text-[#7C7E8C]">Sell</div>
                    <div className="w-[66.5px] h-[8px] rounded-[2px] bg-[#F7324C] ml-[15px]"></div>
                    <div className="font-[500] text-[15px] leading-[22px] flex items-center text-[#7C7E8C]">16%</div>
                </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
