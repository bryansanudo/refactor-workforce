import React from "react";
import { styles } from "@/styles";

const IDivider = () => {
  return (
    <>
      {/*  <div className="mt-6 w-full flex flex-col md:flex-row text-white font-bold md:text-3xl text-xl ">
        <div className="bg-secondary w-full py-8 flex items-center justify-center ">
          <p className="">GET IN TOUCH TODAY!</p>
        </div>
        <div className="bg-primary w-full py-8">
          <p className="">305564-1311</p>
          <p className="text-sm font-normal">AVAILABLE 24/7</p>
        </div>
      </div> */}

      <div className="md:text-3xl text-xl flex  flex-col md:flex-row items-center justify-center w-full bg-gradient-to-r from-primary to-gray-500 ">
        <div className=" w-full md:py-8 py-4 flex items-center justify-center ">
          <p className="text-white font-bold">GET IN TOUCH TODAY!</p>
        </div>
        <div className=" w-full md:py-8 py-4">
          <p className="text-white font-bold">(305) 564-1311</p>
          <p className="text-sm font-normal text-white">AVAILABLE 24/7</p>
        </div>
      </div>
    </>
  );
};

export default IDivider;
