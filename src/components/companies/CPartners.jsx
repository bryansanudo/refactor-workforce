import React from "react";
import chulaLogo from "@/assets/partners/chula-logo.png";
import lestersLogo from "@/assets/partners/lesters-logo.png";
import stoughtonLogo from "@/assets/partners/stoughton-logo.png";
import subwayLogo from "@/assets/partners/subway-logo.png";
import transportationLogo from "@/assets/partners/transportation-logo.png";
import travelkuzLogo from "@/assets/partners/travelkuz-logo.png";
import wildernessLogo from "@/assets/partners/wilderness-logo.png";
import { styles } from "@/styles";
const CPartners = () => {
  return (
    <>
      <div className="container mx-auto pt-16">
        <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16 mt-40">
          <h1 className={`${styles.cTitleText}`}>Our Trusted Partners</h1>
          {/* <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
            Our success has come from being committed to the property and
            investing in the development of the product to maximize sales. At
            the same time and maintaining the integrity.
          </p> */}
        </div>
        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-400 xl:pb-10 pb-16 items-center">
            <img src={chulaLogo} className="w-[170px] grayscale" alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-400 xl:pb-10 pb-16 items-center">
            <img src={lestersLogo} className="w-[130px] grayscale" alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-400 xl:pb-10 pb-16 pt-4 items-center">
            <img src={stoughtonLogo} className="w-[250px] grayscale" alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-400 xl:pb-10 pb-16 items-center">
            <img src={subwayLogo} className="w-[250px] grayscale" alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-400 xl:pt-10 items-center">
            <img src={transportationLogo} className="w-[200px] grayscale" alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-400 xl:pt-10 items-center">
            <img src={travelkuzLogo} className="w-[250px] grayscale" alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
            <img src={wildernessLogo} className="w-[200px] grayscale" alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-400 xl:pt-10 lg:pt-10 md:pt-2 pt-16"></div>
        </div>
      </div>
      <div className="container mx-auto pt-16">
        <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16 mt-40">
          <h1 className={`${styles.cTitleText}`}>Our Trusted Partners</h1>
          {/* <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
            Our success has come from being committed to the property and
            investing in the development of the product to maximize sales. At
            the same time and maintaining the integrity
          </p> */}
        </div>
        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-400 xl:pb-10 pb-16 items-center px-6 md:px-0">
            <img src={chulaLogo} className="w-[170px]" alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-400 xl:pb-10 pb-16 items-center px-6 md:px-0">
            <img src={lestersLogo} className="w-[130px] " alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-400 xl:pb-10 pb-16 pt-4 items-center px-6 md:px-0">
            <img src={stoughtonLogo} className="w-[250px] " alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-400 xl:pb-10 pb-16 items-center px-6 md:px-0">
            <img src={subwayLogo} className="w-[250px] " alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-400 xl:pt-10 items-center px-6 md:px-0">
            <img src={transportationLogo} className="w-[200px] " alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-400 xl:pt-10 items-center px-6 md:px-0">
            <img src={travelkuzLogo} className="w-[250px] " alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16 px-6 md:px-0">
            <img src={wildernessLogo} className="w-[200px] " alt />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-400 xl:pt-10 lg:pt-10 md:pt-2 pt-16"></div>
        </div>
      </div>
    </>
  );
};

export default CPartners;
