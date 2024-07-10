"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const DonutChartComponent = () => {
  const data = {
    labels: ["Hug", "x Hug"],
    datasets: [
      {
        label: "Initial Distribution",
        data: [70, 30],
        backgroundColor: ["#0082FF", "#FAA002"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Initial Distribution",
        position: "top",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

const Tokenomics = () => {
  return (
    <div className="max-sm:hidden max-w-[881px] rounded-[8px] bg-[#FFFFFF] flex flex-col p-[24px] ">
      <div className="flex flex-col gap-[24px]">
        <div className="font-[600] text-[24px] leading-[28.8px] flex  items-center">
          Tokenomics
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="font-[500] text-[20px] leading-[36px] flex items-center text-[#1D1D1D]">
              Initial Distribution
            </div>
            <div className="flex flex-row items-center gap-[24px]">
              {" "}
              <div className="w-[179px] h-[179px] py-[15px]">
                <DonutChartComponent />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-1 items-center">
                    <div className="bg-[#0082FF] h-[12px] w-[12px] rounded-[50%]"></div>
                    <div className="font-[400] text-[16px]  flex items-center text-[#202020]">Crowdsale investors: 70%</div>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <div className="bg-[#FAA002] h-[12px] w-[12px] rounded-[50%]"></div>
                    <div className="font-[400] text-[16px]  flex items-center text-[#202020]">Crowdsale investors: 30%</div>
                </div>
              </div>
            </div>
            <div className="font-[500] text-[16px] leading-[25.6px] text-[#3E424A] flex items-center">Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
