import ISection from "@/components/individuals/ISection";
import PartnersHero from "./PartnersHero";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const Kuz = () => {
  return (
    <>
      <PartnersHero
        bg="url(https://www.travelkuz.com/wp-content/uploads/2023/04/fleet-services-hero.webp)"
        title="Travel Kuz"
      />

      <Link to="/individuals/vacancies">
        <MdArrowBack className="text-5xl" />
      </Link>
      <div className="flex items-start justify-start">
        <p className="md:ml-40 ml-4 font-bold text-3xl">Position available</p>
      </div>
      <ISection>
        <p>Gen Labor</p>
      </ISection>
    </>
  );
};

export default Kuz;
