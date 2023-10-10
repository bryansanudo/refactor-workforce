import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import chulaLogo from "@/assets/partners/chula-logo.png";
import lestersLogo from "@/assets/partners/lesters-logo.png";
import stoughtonLogo from "@/assets/partners/stoughton-logo.png";
import subwayLogo from "@/assets/partners/subway-logo.png";
import transportationLogo from "@/assets/partners/transportation-logo.png";
import travelkuzLogo from "@/assets/partners/travelkuz-logo-bg.png";
import wildernessLogo from "@/assets/partners/wilderness-logo.png";
import kartsLogo from "@/assets/partners/karst-logo.png";
import { styles } from "@/styles";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const SliderPartners = () => {
  const slides = [
    {
      id: 1,
      logo: stoughtonLogo,
      category: "tourism",
      name: "Stoughton Trailers",
      description:
        "Stoughton Trailers is an industry leader in transportation equipment manufacturing. Our Wisconsin intermodal chassis plants are located 100 short miles from the Chicagoland intermodal rail yard, providing convenient and cost effective delivery of new chassis products.",
      location: "Stoughton, WI",
      button: "/individuals/vacancies/stoughton",
    },
    {
      id: 2,
      logo: travelkuzLogo,
      category: "tourism",
      name: "Travel Kuz",
      description:
        "Travel Kuz provides paid training while you become a professional CDL School Bus Driver!",
      location: "Gill, MA",
      button: "/individuals/vacancies/kuz",
    },
    {
      id: 3,
      logo: kartsLogo,
      category: "tourism",
      name: "Karst Stage",
      description:
        "Located in Bozeman, MT, Karst Stage offers transportation for your group in the local Bozeman area, Yellowstone National Park, the western United States and Canada. It currently operates over 70 luxury charter vehicles.",
      location: "Bozeman, MO",
      button: "/individuals/vacancies/karst",
    },
    {
      id: 4,
      logo: subwayLogo,
      category: "tourism",
      name: "Subway of Alaska",
      description:
        "Subway® has created a work environment, compensation and benefits program, and interactive culture that we believe foster positive working relationships. They support promotion from within and foster an entrepreneurial spirit through which each team member personally contributes to the company's success.",
      location: "Anchorage, AK",
      button: "/individuals/vacancies/subway",
    },
    {
      id: 5,
      logo: stoughtonLogo,
      category: "tourism",
      name: "Midnight Sun",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi vel quas laborum, dolores quo nostrum esse, cupiditate velit, veniam exercitationem quia! Quidem quibusdam aspernatur minus vel, repellat aliquid delectus.",
      location: "Fairbanks, AK",
      button: "/individuals/vacancies/midnight",
    },
    {
      id: 6,
      logo: wildernessLogo,
      category: "tourism",
      name: "Wilderness Resort",
      location: "Wisconsin Dells, WI",
      description:
        "Occupying 600 acres, Wilderness Resort is the largest water park resort in the United States, located in the world capital of water parks, Wisconsin Dells!",
      button: "/individuals/vacancies/wilderness",
    },
    {
      id: 7,
      logo: chulaLogo,
      category: "tourism",
      name: "Chula Vista",
      description:
        "Chula Vista Resort offers over 200,000 square feet of water parks, top-notch spas, culinary delights in one of the most outstanding chophouses in the USA, and even an 18-hole golf course!",
      location: "Wisconsin Dells, WI",
      button: "/individuals/vacancies/chula",
    },
    {
      id: 8,
      logo: stoughtonLogo,
      category: "tourism",
      name: "Mult Entities",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi vel quas laborum, dolores quo nostrum esse, cupiditate velit, veniam exercitationem quia! Quidem quibusdam aspernatur minus vel, repellat aliquid delectus.",
      location: "Chicago area",
      button: "/individuals/vacancies/mult",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative max-w-[1000px] flex items-center justify-center w-full my-20 flex-col md:flex-row ">
      <div className="flex mx-auto w-full bottom-0 justify-center py-2 absolute z-30 ">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex}>
            <RxDotFilled
              onClick={() => goToSlide(slideIndex)}
              className={`text-4xl cursor-pointer ${
                slideIndex === currentIndex ? "text-primary" : "text-black"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="shadow-md shadow-black rounded-3xl p-20 flex flex-col items-center justify-center gap-4 max-w-[600px]">
        <img
          src={slides[currentIndex].logo}
          className="object-contain w-[200px]"
        />
        <p className="font-bold text-xl">{slides[currentIndex].name}</p>
        <p className={`${styles.sectionText}`}>
          {slides[currentIndex].description}
        </p>
        <p className="kbd capitalize">{slides[currentIndex].category}</p>
        <div className="flex items-center justify-center gap-2">
          <GrLocation />
          <p className="font-bold">Location:</p>
          <p>{slides[currentIndex].location}</p>
        </div>
        <Link to={slides[currentIndex].button}>
          <button className="btn btn-outline btn-primary  capitalize">
            View Vacancies
          </button>
        </Link>
      </div>

      {/* Left Arrow */}
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft
          className="text-primary"
          onClick={prevSlide}
          size={30}
        />
      </div>
      {/* Right Arrow */}
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight
          className="text-primary"
          onClick={nextSlide}
          size={30}
        />
      </div>
    </div>
  );
};

export default SliderPartners;
