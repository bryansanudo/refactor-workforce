import React from "react";

const ISection = ({ title, subtitle, children, name }) => {
  return (
    <div>
      <section
        name={name}
        className="min-h-fit flex flex-col justify-start items-center mt-16  text-center"
      >
        {children}
      </section>
    </div>
  );
};

export default ISection;
