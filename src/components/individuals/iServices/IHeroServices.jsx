import React from "react";

const IHeroServices = () => {
  return (
    <>
      <>
        <div
          className="hero min-h-[60vh] "
          style={{
            backgroundImage:
              "url(https://static.wixstatic.com/media/11062b_295bd793bed843b6ade312eaa41c5b81~mv2.jpg/v1/fill/w_1903,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_295bd793bed843b6ade312eaa41c5b81~mv2.jpg)",
          }}
        >
          <div className="hero-overlay bg-black opacity-50" />
          <div className="hero-content text-center text-white">
            <div className="max-w-5xl">
              <h2 className="mb-5 md:text-7xl text-4xl  font-bold">
                EB-3 UNSKILLED VISA
              </h2>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default IHeroServices;
