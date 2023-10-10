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
  return (
    <>
      <IHeroVacancies />
      <ISection>
        {/* <div className="grid grid-cols-3 px-6 m-10 gap-6">
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
        </div> */}
        <SliderPartners />
      </ISection>
    </>
  );
};

export default IVacancies;
