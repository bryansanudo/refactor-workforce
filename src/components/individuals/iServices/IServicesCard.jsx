import React, { useState } from "react";
import { AiFillAlert } from "react-icons/ai";

const IServicesCard = () => {
  return (
    <div className="flex flex-col items-center  mx-10 p-2 mb-6">
      <div className="relative  md:order-2">
        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
          <div
            className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
            style={{
              background:
                "linear-gradient(90deg, #94171A -0.55%, #ffffff 22.86%, #263D72 48.36%, #ffffff 73.33%, #94171A 99.34%)",
            }}
          ></div>
        </div>

        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
          {/* Card one */}
          <div className="flex flex-col overflow-hidden shadow-md shadow-black rounded-3xl">
            <div className="flex flex-col items-center justify-center flex-1 p-6 bg-white lg:py-8 lg:px-7 gap-4">
              <AiFillAlert className="text-7xl" />
              <p className="font-bold text-2xl">Historic Success</p>
              <p>
                The Immigration and Nationality Act, passed in 1990, created the
                EB-3 Unskilled Visa program.
              </p>
            </div>
          </div>
          {/* Card two */}
          <div className="flex flex-col overflow-hidden shadow-md shadow-black rounded-3xl">
            <div className="flex flex-col items-center justify-center flex-1 p-6 bg-white lg:py-8 lg:px-7 gap-4">
              <AiFillAlert className="text-7xl" />
              <p className="font-bold text-2xl">Opportunity Awaits</p>
              <p>
                Anyone can participate in this program. There are no educational
                or skill prerequisites for applying.
              </p>
            </div>
          </div>
          {/* Card three */}
          <div className="flex flex-col overflow-hidden shadow-md shadow-black rounded-3xl">
            <div className="flex flex-col items-center justify-center flex-1 p-6 bg-white lg:py-8 lg:px-7 gap-4">
              <AiFillAlert className="text-7xl" />
              <p className="font-bold text-2xl">Versatile Process</p>
              <p>
                Applicants can complete this procedure either from within the
                United States, if they live in the US on a different type of
                visa, or from their country of origin or where they currently
                reside.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IServicesCard;
