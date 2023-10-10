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
        <SliderPartners />
      </ISection>
    </>
  );
};

export default IVacancies;
