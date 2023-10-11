import { styles } from "@/styles";

const Responsabilities = ({ children, location, locationImg, p1, p2, p3 }) => {
  return (
    <>
      <div className="flex mt-20">
        <p className={`${styles.titleText} my-4`}>Responsaiblities</p>
      </div>
      <div className=" w-full shadow-black shadow-lg  rounded-2xl p-10 mb-20 ">
        {children}
        <div>
          <div className="flex  md:ml-20 mt-10">
            <p className="font-bold">Location:</p>
            <span className="ml-2">{location}</span>
          </div>
          <div className="flex items-center justify-center">
            <img src={locationImg} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center mt-6">
          <p className="text-left">{p1}</p>
          <p className="text-left">{p2}</p>
          <p className="text-left">{p3}</p>
        </div>
      </div>
    </>
  );
};

export default Responsabilities;
