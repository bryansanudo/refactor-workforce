import React from "react";

const IHeroHome = () => {
  return (
    <>
      <div
        className="hero min-h-[60vh]  "
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/863055_797b59f1342445a19f07a0cee65d9812~mv2.jpg/v1/fill/w_1652,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/863055_797b59f1342445a19f07a0cee65d9812~mv2.jpg)",
        }}
      >
        <div className="hero-overlay bg-black opacity-50" />
        <div className="hero-content text-center text-white">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-5xl font-bold">
              The Better FREE Way To Connect With The Right Manpower For Your
              Business
            </h1>
            <p className="mb-5 text-3xl">No Cost, No Hassle, No Brainer</p>
            <button className="btn hover:scale-105 btn-primary">
              YES !TEACH ME HOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IHeroHome;
