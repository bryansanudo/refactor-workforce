import { useEffect } from "react";

const CHero = ({ bg, title }) => {
  return (
    <div
      className="hero min-h-[90vh] "
      style={{
        backgroundImage: bg,
      }}
    >
      <div className="hero-overlay bg-black opacity-50" />
      <div className="hero-content text-center text-white">
        <div className="max-w-5xl">
          <h2 className="uppercase my-5 lg:text-5xl md:text-3xl text-2xl font-bold">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CHero;
