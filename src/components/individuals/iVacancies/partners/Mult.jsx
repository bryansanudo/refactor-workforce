import ISection from "@/components/individuals/ISection";
import PartnersHero from "./PartnersHero";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const Subway = () => {
  return (
    <>
      <PartnersHero
        bg="url(https://static.wixstatic.com/media/863055_797b59f1342445a19f07a0cee65d9812~mv2.jpg/v1/fill/w_1903,h_538,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/863055_797b59f1342445a19f07a0cee65d9812~mv2.jpg)"
        title="Mult Entities"
      />

      <Link to="/individuals/vacancies">
        <MdArrowBack className="text-5xl" />
      </Link>
      <div className="flex items-start justify-start">
        <p className="md:ml-40 ml-4 font-bold text-3xl">Position available</p>
      </div>
      <ISection>
        <p>Sandwich Artist</p>
      </ISection>
    </>
  );
};

export default Subway;
