import ISection from "@/components/individuals/ISection";
import PartnersHero from "./PartnersHero";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const Wilderness = () => {
  return (
    <>
      <PartnersHero
        bg="url(https://www.wildernessresort.com/wp-content/uploads/2023/01/T-HOUSE-SLIDER-NEW1-1800x596-c-default.jpg)"
        title="Wilderness Resort"
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

export default Wilderness;