import ISection from "@/components/individuals/ISection";
import PartnersHero from "./PartnersHero";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import PositionAvailable from "@/components/individuals/iVacancies/PositionAvailable";
import assemblerImg from "@/assets/contact.jpg";

const Karst = () => {
  return (
    <>
      <PartnersHero
        bg="url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRvOkAHQMk2fk4LzDFEmBAySA2-FqwFtKjCTH6rLeX39hTXRcYT)"
        title="Karst Stage"
      />

      <Link to="/individuals/vacancies">
        <MdArrowBack className="text-5xl" />
      </Link>
      <div className="flex items-start justify-start">
        <p className="md:ml-40 ml-4 font-bold text-3xl">Position available</p>
      </div>
      <ISection>
        <PositionAvailable
          cardImg={assemblerImg}
          title="Gen Labor"
          description="Additionally, you will have access to overtime hours that will be paid at 1.5 times your regular salary. $15 USD x 1.5 = $22.5 USD per overtime hour (overtime hours are not guaranteed and are assigned based on management's discretion)."
          usd="15"
        />
      </ISection>
    </>
  );
};

export default Karst;
