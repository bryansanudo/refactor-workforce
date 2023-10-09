import ISection from "@/components/individuals/ISection";
import PartnersHero from "./PartnersHero";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

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
        <p>Gen Labor</p>
      </ISection>
    </>
  );
};

export default Karst;
