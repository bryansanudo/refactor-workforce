import ISection from "@/components/individuals/ISection";
import PartnersHero from "./PartnersHero";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const Stoughton = () => {
  return (
    <>
      <PartnersHero
        bg="url(https://www.stoughtontrailers.com/portals/0/Images/dry-van-1.png?ver=IUWaJREjkqb7N0P71Pppgw%3d%3d)"
        title="Stoughton Trailers"
      />

      <Link to="/individuals/vacancies">
        <MdArrowBack className="text-5xl" />
      </Link>
      <div className="flex items-start justify-start">
        <p className="md:ml-40 ml-4 font-bold text-3xl">Position available</p>
      </div>
      <ISection>
        <p>Assembler</p>
      </ISection>
    </>
  );
};

export default Stoughton;
