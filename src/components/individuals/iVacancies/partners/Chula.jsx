import ISection from "@/components/individuals/ISection";
import PartnersHero from "./PartnersHero";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const Chula = () => {
  return (
    <>
      <PartnersHero
        bg="url(https://www.chulavistaca.gov/home/showpublishedimage/18880/637823229984270000)"
        title="Chula Vista"
      />

      <Link to="/individuals/vacancies">
        <MdArrowBack className="text-5xl" />
      </Link>
      <div className="flex items-start justify-start">
        <p className="md:ml-40 ml-4 font-bold text-3xl">Position available</p>
      </div>
      <ISection>
        <p>House/Life</p>
      </ISection>
    </>
  );
};

export default Chula;
