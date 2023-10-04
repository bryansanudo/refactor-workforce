const ImgContent = ({ img, title1, title2, children }) => {
  return (
    <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
      <div className="md:w-1/2 flex items-center justify-center ">
        <img src={img} className="rounded-3xl w-[500px] object-contain  " />
      </div>
      <div className="md:w-1/2 max-w-[500px]">
        <div className="text-center mb-10">
          <p className="md:text-2xl text-xl text-gray-400 font-bold">
            {title1}
          </p>
          <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl  ">
            {title2}
          </p>
          <span className="border-b-8 border-black"></span>
        </div>
        {children}
        <button className="btn btn-outline btn-primary mt-4 animate-pulse">
          YES! TEACH ME HOW
        </button>
      </div>
    </div>
  );
};

export default ImgContent;
