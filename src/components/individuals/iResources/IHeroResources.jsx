import React from "react";

const IHeroResources = () => {
  return (
    <div
      className="hero min-h-[60vh] "
      style={{
        backgroundImage:
          "url(https://static.wixstatic.com/media/863055_797b59f1342445a19f07a0cee65d9812~mv2.jpg/v1/fill/w_1903,h_538,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/863055_797b59f1342445a19f07a0cee65d9812~mv2.jpg)",
      }}
    >
      <div className="hero-overlay bg-black opacity-50" />
      <div className="hero-content text-center text-white">
        <div className="max-w-5xl">
          <h2 className="mb-5 md:text-7xl text-4xl  font-bold">RESOURCES</h2>
        </div>
      </div>
    </div>
  );
};

export default IHeroResources;
