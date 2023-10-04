import React from "react";

const IHeroHistories = () => {
  return (
    <>
      <div
        className="hero min-h-[50vh] "
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/11062b_e6ba464aa23c45dfade71108a76f78c7~mv2.jpg/v1/fill/w_1903,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_e6ba464aa23c45dfade71108a76f78c7~mv2.jpg)",
        }}
      >
        <div className="hero-overlay bg-black opacity-50" />
        <div className="hero-content text-center text-white">
          <div className="max-w-5xl">
            <h1 className="mb-5 md:text-7xl text-4xl  font-bold">
              CASE STUDIES
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default IHeroHistories;
