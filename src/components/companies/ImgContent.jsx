import { styles } from "@/styles";

const ImgContent = ({ img, title1, title2, children }) => {
  return (
    <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row my-10">
      <div className="md:w-1/2 flex items-center justify-center mx-6 ">
        <img src={img} className="rounded-3xl w-[500px] object-contain  " />
      </div>
      <div className="md:w-1/2 max-w-[500px] mx-6">
        <div className="text-center mb-10">
          <p className="md:text-2xl text-xl text-gray-400 font-bold">
            {title1}
          </p>
          <p className={`${styles.cTitleText}`}>{title2}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ImgContent;
