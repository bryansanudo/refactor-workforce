import React from "react";

const CSection = ({ title, subtitle, children, name }) => {
  return (
    <div>
      <h1 className="text-black" name={name}>
        .
      </h1>
      <section
        name={name}
        className="min-h-fit flex flex-col justify-start items-center px-5 text-center"
      >
        <div
          className={`font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-secondary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl uppercase`}
        >
          {title}
        </div>

        <div className="max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base">
          {subtitle}
        </div>

        {children}
      </section>
    </div>
  );
};

export default CSection;
