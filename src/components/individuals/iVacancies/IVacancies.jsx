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
import travelkuzLogo from "@/assets/partners/travelkuz-logo.png";
import wildernessLogo from "@/assets/partners/wilderness-logo.png";
import kartsLogo from "@/assets/partners/karst-logo.png";

const IVacancies = () => {
  const vacancies = [
    {
      id: 1,
      logo: stoughtonLogo,
      category: "tourism",
      name: "Stoughton Trailers",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi vel quas laborum, dolores quo nostrum esse, cupiditate velit, veniam exercitationem quia! Quidem quibusdam aspernatur minus vel, repellat aliquid delectus.",
      location: "Stoughton, WI",
      button: "/individuals/vacancies/stoughton",
    },
    {
      id: 2,
      logo: travelkuzLogo,
      category: "tourism",
      name: "Travel Kuz",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi vel quas laborum, dolores quo nostrum esse, cupiditate velit, veniam exercitationem quia! Quidem quibusdam aspernatur minus vel, repellat aliquid delectus.",
      location: "Gill, MA",
      button: "/individuals/vacancies/kuz",
    },
    {
      id: 3,
      logo: kartsLogo,
      category: "tourism",
      name: "Karst Stage",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi vel quas laborum, dolores quo nostrum esse, cupiditate velit, veniam exercitationem quia! Quidem quibusdam aspernatur minus vel, repellat aliquid delectus.",
      location: "Bozeman, MO",
      button: "/individuals/vacancies/karst",
    },
    {
      id: 4,
      logo: subwayLogo,
      category: "tourism",
      name: "Subway of Alaska",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi vel quas laborum, dolores quo nostrum esse, cupiditate velit, veniam exercitationem quia! Quidem quibusdam aspernatur minus vel, repellat aliquid delectus.",
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
      name: "Wilderness Res",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi vel quas laborum, dolores quo nostrum esse, cupiditate velit, veniam exercitationem quia! Quidem quibusdam aspernatur minus vel, repellat aliquid delectus.",
      location: "Wisconsin Dells, WI",
      button: "/individuals/vacancies/wilderness",
    },
    {
      id: 7,
      logo: chulaLogo,
      category: "tourism",
      name: "Chula Vista",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi vel quas laborum, dolores quo nostrum esse, cupiditate velit, veniam exercitationem quia! Quidem quibusdam aspernatur minus vel, repellat aliquid delectus.",
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

  return (
    <>
      <IHeroVacancies />
      <ISection>
        <div className="grid grid-cols-3 px-6 m-10 gap-6">
          {vacancies.map(
            ({ id, name, logo, description, category, location, button }) => (
              <div
                key={id}
                className="shadow-md bg-gray-200 shadow-black rounded-3xl p-6 flex flex-col items-center justify-center gap-4"
              >
                <img src={logo} alt="" />
                <p className="font-bold text-xl">{name}</p>
                <p className={`${styles.sectionText}`}>{description}</p>
                <p className="kbd capitalize">{category}</p>
                <div className="flex items-center justify-center gap-2">
                  <GrLocation />
                  <p className="font-bold">Location:</p>
                  <p>{location}</p>
                </div>
                <Link to={button}>
                  <button className="btn btn-outline btn-primary  capitalize">
                    View Vacancies
                  </button>
                </Link>
              </div>
            )
          )}
        </div>
      </ISection>
    </>
  );
};

export default IVacancies;
