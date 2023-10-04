import React from "react";

const IDivider = () => {
  return (
    <div className="w-full flex flex-col md:flex-row text-white font-bold md:text-3xl text-xl ">
      <div className="bg-secondary w-full py-8 flex items-center justify-center ">
        <p className="">GET IN TOUCH TODAY!</p>
      </div>
      <div className="bg-primary w-full py-8">
        <p className="">305564-1311</p>
        <p className="text-sm font-normal">AVAILABLE 24/7</p>
      </div>
    </div>
  );
};

export default IDivider;
