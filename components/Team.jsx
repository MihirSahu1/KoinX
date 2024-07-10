import React from "react";
import Image from "next/image";
import Trending from "./Trending";

const Team = () => {
  return (
    <div className="max-sm:border max-sm:border-[#DEE1E6] max-w-[881px] rounded-[8px] bg-[#FFFFFF] flex flex-col sm:p-[24px] px-[10px] py-[16px] ">
      <div className="flex flex-col gap-[24px]">
        <div className="font-[600] text-[24px] leading-[28.8px] flex  items-center">
          Team
        </div>
        <div className="font-[500] text-[16px] leading-[25.6px] flex items-center text-[#3E424A]">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </div>
        <div className="flex sm:flex-row flex-col gap-4 rounded-[8px] bg-[#E8F4FD] p-[11.19px]">
          <div className="flex flex-col items-center gap-[13.19px] px-[16px]">
            <Image
              src="/sandeep.svg"
              alt="team1"
              width={96.35}
              height={104.81}
            />
            <div className="flex flex-col gap-[4.12px] items-center">
              <div className="font-[600] text-[15px] leading-[18.15px] flex items-center">
                John Smith
              </div>
              <div className="font-[500] text-[12px] leading-[14.52px] flex items-center text-[#788F9B]">
                Designation here
              </div>
            </div>
          </div>
          <div className="font-[400] text-[14px] leading-[22.4px] text-[#0F1629] flex items-center sm:w-[646px]">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-4 rounded-[8px] bg-[#E8F4FD] p-[11.19px]">
          <div className="flex flex-col items-center gap-[13.19px] px-[16px]">
            <Image
              src="/mandeep.svg"
              alt="team1"
              width={96.35}
              height={104.81}
            />
            <div className="flex flex-col gap-[4.12px] items-center">
              <div className="font-[600] text-[15px] leading-[18.15px] flex items-center">
                Elina Williams
              </div>
              <div className="font-[500] text-[12px] leading-[14.52px] flex items-center text-[#788F9B]">
                Designation here
              </div>
            </div>
          </div>
          <div className="font-[400] text-[14px] leading-[22.4px] text-[#0F1629] flex items-center sm:w-[646px]">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-4 rounded-[8px] bg-[#E8F4FD] p-[11.19px]">
          <div className="flex flex-col items-center gap-[13.19px] px-[16px]">
            <Image
              src="/randeep.svg"
              alt="team1"
              width={96.35}
              height={104.81}
            />
            <div className="flex flex-col gap-[4.12px] items-center">
              <div className="font-[600] text-[15px] leading-[18.15px] flex items-center">
                John Smith
              </div>
              <div className="font-[500] text-[12px] leading-[14.52px] flex items-center text-[#788F9B]">
                Designation here
              </div>
            </div>
          </div>
          <div className="font-[400] text-[14px] leading-[22.4px] text-[#0F1629] flex items-center sm:w-[646px]">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </div>
        </div>
      </div>
      <div className="mt-[20px] sm:hidden">
        <Trending />
      </div>
    </div>
  );
};

export default Team;
