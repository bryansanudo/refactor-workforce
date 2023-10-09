const ISection = ({ children, name }) => {
  return (
    <div>
      <section
        name={name}
        className="min-h-fit flex flex-col justify-start items-center text-center overflow-hidden"
      >
        {children}
      </section>
    </div>
  );
};

export default ISection;
