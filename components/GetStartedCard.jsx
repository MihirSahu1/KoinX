import React from "react";
import Image from "next/image";

const GetStartedCard = () => {
  return (
    <div className="max-sm:w-full rounded-2 flex-col flex bg-[#0052FE] pt-[16px] pb-[16px] sm:pl-[31px] pl-[10px] pr-[10px] sm:pr-[31px] rounded-[8px] justify-center items-center gap-[19px]">
      <div className="flex flex-col items-center gap-[14px]">
        <div className="flex flex-col justify-center items-center text-[#FFFFFF] leading-[40px] text-[24px] max-w-[268px] font-[700]">
          <span>Get Started with KoinX</span> <span>for FREE</span>
        </div>
        <div className="max-w-[327px] text-[14px] leading-[24px] text-[#FFFFFF] font-[500] flex flex-col justify-center items-center">
          <span>With our range of features that you can equip for</span>{" "}
          <span>free, KoinX allows you to be more educated and </span>
          <span>aware of your tax reports.</span>
        </div>
      </div>
      <Image src="/Frame.svg" alt="arrow" width={178} height={166} />
      <div className="w-[237px] h-[48px] flex justify-center items-center gap-[6px] rounded-[8px] pt-[8px] pb-[8px] pl-[24px] pr-[24px] bg-[#FFFFFF]">
        <div className="font-[600] text-[16px] leading-[28px] ">
          Get Started for FREE
        </div>
        <Image src="/ArrowRight.svg" alt="arrow" width={20} height={20} />
      </div>
    </div>
  );
};

export default GetStartedCard;
