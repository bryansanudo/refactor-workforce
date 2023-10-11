import ISection from "@/components/individuals/ISection";
import IHeroVacancies from "@/components/individuals/iVacancies/IHeroVacancies";
import { styles } from "@/styles";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

import chulaLogo from "@/assets/partners/chula-logo.png";
import lestersLogo from "@/assets/partners/lesters-logo.png";
import stoughtonLogo from "@/assets/partners/stoughton-logo.png";
import subwayLogo from "@/assets/partners/subway-logo.png";
import transportationLogo from "@/assets/partners/transportation-logo.png";
import travelkuzLogo from "@/assets/partners/travelkuz-logo-bg.png";
import wildernessLogo from "@/assets/partners/wilderness-logo.png";
import kartsLogo from "@/assets/partners/karst-logo.png";
import SliderPartners from "@/components/individuals/SliderPartners";
const IVacancies = () => {
  const vacancies = [
    {
      id: 1,
      logo: stoughtonLogo,
      category: "tourism",
      name: "Stoughton Trailers",
      description:
        "Stoughton Trailers is an industry leader in transportation equipment manufacturing. Our Wisconsin intermodal chassis plants are located 100 short miles from the Chicagoland intermodal rail yard, providing convenient and cost effective delivery of new chassis products.",
      location: "Stoughton, WI",
      button: "/individuals/vacancies/stoughton",
      website: "https://www.stoughtontrailers.com/",
      v1: "Assembler",
      usd1: "$ 15 USD / Hour",
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
      website: "https://www.travelkuz.com/",
      v1: "General Labor",
      usd1: "$ 15 USD / Hour",
    },

    {
      id: 4,
      logo: subwayLogo,
      category: "tourism",
      name: "Subway",
      description:
        "Subway® has created a work environment, compensation and benefits program, and interactive culture that we believe foster positive working relationships. They support promotion from within and foster an entrepreneurial spirit through which each team member personally contributes to the company's success.",
      location: "Anchorage, AK.",
      l2: "Fairbanksm Ak.",
      l3: "Chicago Area.",
      button: "/individuals/vacancies/subway",
      website: "https://www.subway.com/es-co",
      v1: "Sandwich Artist",
      usd1: "$ 15 USD / Hour",
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
      website: "https://karststage.com/",
      v1: "General Labor",
      usd1: "$ 15 USD / Hour",
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
      website: "https://www.wildernessresort.com/",
      v1: "Housekeeper",
      usd1: "$ 15 USD / Hour",
      v2: "Lifeguard",
      usd2: "$ 15 USD / Hour",
      style: "kbd",
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
      website: "https://chulavistaresort.com/",
      v1: "Housekeeper",
      usd1: "$ 15 USD / Hour",
      v2: "Lifeguard",
      usd2: "$ 15 USD / Hour",
      style: "kbd",
    },
  ];
  return (
    <>
      <IHeroVacancies />
      <ISection>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1 my-10 mx-6  ">
          {vacancies.map(
            ({
              id,
              logo,
              category,
              name,
              description,
              location,
              l2,
              l3,
              button,
              usd1,
              v1,
              usd2,
              v2,
              website,
              style,
            }) => {
              const uniqueId = `modal-${id}`;

              return (
                <div
                  key={id}
                  className="shadow-md gap-20 shadow-black rounded-3xl px-6 flex flex-col items-center justify-between max-w-[600px] pt-8  "
                >
                  <div className="max-w-[300px]">
                    <img
                      src={logo}
                      className="object-contain md:w-[350px] w-[200px] "
                    />
                  </div>
                  {/* <p className="font-bold text-xl">{name}</p> */}
                  <p className={`${styles.sectionText}`}>{description}</p>
                  {/* <p className="kbd capitalize">{category}</p> */}
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <GrLocation />
                      <p className="font-bold">Locations:</p>
                      <div className="flex flex-col items-start">
                        <p>{location}</p>
                        <p>{l2}</p>
                        <p>{l3}</p>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary btn-outline mb-6"
                      onClick={() =>
                        document.getElementById(uniqueId).showModal()
                      }
                    >
                      View Vacancies
                    </button>

                    <dialog id={uniqueId} className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div className="flex items-center justify-center gap-4 mb-10">
                          <h3 className="font-bold text-lg">{v1}</h3>
                          <p className="py-4 kbd ">{usd1}</p>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <h3 className="font-bold text-lg">{v2}</h3>
                          <p className={`${style} py-4`}>{usd2}</p>
                        </div>
                        <div className="flex items-center justify-end animate-pulse">
                          <a href={website} target="_blank">
                            <img
                              src={logo}
                              alt=""
                              className="h-24 w-24 object-contain"
                            />
                          </a>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </ISection>
    </>
  );
};

export default IVacancies;
