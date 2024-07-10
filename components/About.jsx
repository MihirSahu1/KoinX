'use client';
import React,{useEffect , useState} from "react";
import Image from "next/image";

const About = ({crypto}) => {
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
  return (
    <div className="max-sm:border max-sm:border-[#DEE1E6] max-w-[881px] rounded-[8px] bg-[#FFFFFF] flex flex-col sm:p-[24px] px-[10px] py-[16px]">
      <div className="flex flex-col gap-[24px]">
        <div className="font-[600] text-[24px] leading-[28.8px] flex  items-center">
          About {coinData?.name}
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-col gap-[10px]">
            <div className="font-[700] text-[18px] leading-[21.6px]">
              What is {coinData?.name}?
            </div>
            <div className="font-[500] text-[16px] overflow-hidden leading-[25.6px] text-[#3E424A]">
             {coinData?.description?.en}
            </div>
          </div>
          <div className="h-0 border border-[#DEE1E6]"></div>
          <div className="flex flex-col gap-[10px]">
            <div className="font-[700] text-[18px] leading-[21.6px] flex items-center">
              Lorem ipsum dolor sit amet
            </div>
            <div className="flex flex-col gap-[20px] font-[500] text-[16px] leading-[25.6px] justify-center text-[#3E424A]">
              <div>
                Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
                lobortis tristique pharetra. Diam id et lectus urna et tellus
                aliquam dictum at. Viverra diam suspendisse enim facilisi diam
                ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
                sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                rhoncus.{" "}
              </div>
              <div>
                Diam praesent massa dapibus magna aliquam a dictumst volutpat.
                Egestas vitae pellentesque auctor amet. Nunc sagittis libero
                adipiscing cursus felis pellentesque interdum. Odio cursus
                phasellus velit in senectus enim dui. Turpis tristique placerat
                interdum sed volutpat. Id imperdiet magna eget eros donec cursus
                nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
                Integer dignissim augue viverra nulla et quis lobortis
                phasellus. Integer pellentesque enim convallis ultricies at.
              </div>
              <div>
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                aliquam massa vel convallis duis ac. Mi adipiscing semper
                scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                tincidunt volutpat in eget. Ullamcorper dui
              </div>
            </div>
          </div>
          <div className="h-0 border border-[#DEE1E6]"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-[600] text-[16px] sm:text-[24px] leading-[28.8px] flex  items-center">
            Already Holding {coinData?.name}?
          </div>
          <div className="flex flex-row justify-between flex-wrap gap-[15px]">
            <div className="flex-row gap-[27.61px] flex p-3 bg-custom-gradient1 w-[362px] h-[140px] sm:w-[388px] sm:h-[151px] rounded-[6.65px]">
              <Image
                src="/Rectangle.svg"
                alt="arrow"
                width={128}
                height={128}
              />
              <div className="flex-col flex justify-between">
                <div className="font-[700] text-[20px] leading-[28px] flex items-center text-[#FFFFFF]">
                  Calculate your Profits
                </div>
                <div className="w-[132px] h-[32px] flex flex-row justify-center gap-[6px] bg-[#FFFFFF] rounded-[8px]">
                  <div className="font-[600] text-[14px] leading-[28px] flex items-center text-[#0F1629] cursor-pointer">
                    Check Now
                  </div>
                  <Image src="/Arrow.svg" alt="arrow" width={20} height={20} />
                </div>
              </div>
            </div>
            <div className="flex-row gap-[27.61px] flex p-3 bg-custom-gradient2 w-[362px] h-[140px] sm:w-[388px] sm:h-[151px] rounded-[6.65px]">
              <Image
                src="/Rectangle1.svg"
                alt="arrow"
                width={128}
                height={128}
              />
              <div className="flex-col flex justify-between">
                <div className="font-[700] text-[20px] leading-[28px] flex items-center text-[#FFFFFF]">
                  Calculate your tax liability
                </div>
                <div className="w-[132px] h-[32px] flex flex-row justify-center gap-[6px] bg-[#FFFFFF] rounded-[8px]">
                  <div className="font-[600] text-[14px] leading-[28px] flex items-center text-[#0F1629] cursor-pointer">
                    Check Now
                  </div>
                  <Image src="/Arrow.svg" alt="arrow" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="h-0 border border-[#DEE1E6] my-[15px]"></div>
      <div className="font-[500] text-[16px] leading-[25.6px] flex items-center text-[#3E424A]">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui

</div>
    </div>
  );
};

export default About;
