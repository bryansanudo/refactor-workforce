import React from "react";

const EbTwoCol = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl">
        EB-3 Visa
      </p>
      <div className="flex items-center justify-center mt-10 flex-col md:flex-row gap-10">
        <div className="flex flex-col justify-center items-center gap-4 max-w-[600px] p-10">
          <p className="text-4xl font-bold">Process Length</p>
          <p className="text-xl font-bold">Around 18 months</p>
          <p className="max-w-[300px] md:max-w-[800px] text-left">
            The length of the processing times for the EB3 program varies and
            depends on the location (Longstanding Successcountry of origin) and
            status of the applicant (Consular Process vs. Adjustment of Status)
            and can also depend on the type of industry the applicant is sought
            for.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center  gap-4 max-w-[600px] p-10">
          <p className="text-4xl font-bold">Investment</p>
          <p className="text-xl font-bold">$400-$1200</p>
          <p className="max-w-[300px] md:max-w-[800px] text-left">
            In order to proceed with the Labor Certificate, compliance with
            regulations necessitates the advertisement of the position to U.S.
            Workers. This process labor certification process, independent of
            the quantity of employees required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EbTwoCol;
