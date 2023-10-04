import { useState } from "react";
import slide1 from "@/assets/slide/slide1.jpg";
import slide2 from "@/assets/slide/slide2.jpg";
import slide3 from "@/assets/slide/slide3.jpg";
import slide4 from "@/assets/slide/slide4.jpg";

import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const ARRAY_IMG = [slide1, slide2, slide3, slide4];

const ISliderTestimonials = () => {
  const [index, setIndex] = useState(0);
  const handleClickNext = () => {
    index === ARRAY_IMG.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_IMG.length - 1) : setIndex(index - 1);
  };

  return (
    <>
      <div className="flex  justify-center items-center  md:gap-20 gap-4 mx-8 my-10">
        <button
          className="flex  items-center justify-center  "
          onClick={handleClickPrev}
        >
          <GrLinkPrevious size={40} />
        </button>
        <img
          src={ARRAY_IMG[index]}
          className="rounded-lg shadow-xl  shadow-black object-contain md:w-[400px] w-[300px]  "
        />

        <button
          className=" flex  items-center justify-center"
          onClick={handleClickNext}
        >
          <GrLinkNext size={40} />
        </button>
      </div>
    </>
  );
};

export default ISliderTestimonials;
