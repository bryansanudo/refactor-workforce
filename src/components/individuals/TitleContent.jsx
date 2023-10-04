import React from "react";

const TitleContent = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-6 my-10 ">
      <p className="font-bold text-3xl text-center p-3 text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl ">
        {title}
      </p>
      {children}
    </div>
  );
};

export default TitleContent;
