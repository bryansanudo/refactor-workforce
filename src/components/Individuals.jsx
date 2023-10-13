import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import INavbar from "@/components/individuals/INavbar";
import IFooter from "@/components/individuals/IFooter";

import IHome from "@/components/individuals/iHome/IHome";
import IAbout from "@/components/individuals/iAbout/IAbout";
import IServices from "@/components/individuals/iServices/IServices";
import IHistories from "@/components/individuals/iSuccessHistories/IHistories";
import IResources from "@/components/individuals/iResources/IResources";
import IContact from "@/components/individuals/iContact/IContact";
import IVacancies from "@/components/individuals/iVacancies/IVacancies";

import Subway from "@/components/individuals/iVacancies/partners/Subway";
import Chula from "@/components/individuals/iVacancies/partners/Chula";
import Karst from "@/components/individuals/iVacancies/partners/Karst";
import Kuz from "@/components/individuals/iVacancies/partners/Kuz";
import Midnight from "@/components/individuals/iVacancies/partners/Midnight";
import Mult from "@/components/individuals/iVacancies/partners/Mult";
import Stoughton from "@/components/individuals/iVacancies/partners/Stoughton";
import Wilderness from "@/components/individuals/iVacancies/partners/Wilderness";
import CHome from "@/components/companies/cHome/CHome";

const Individuals = ({ content, setContent }) => {
  const navigate = useNavigate();
  const btnIndividuals = () => {
    setContent(1);
  };

  const btnCompanies = () => {
    setContent(2);
  };

  useEffect(() => {
    navigate("/individuals/home");
  }, []);

  return (
    <>
      {/* <div className="flex flex-col md:flex-row items-center justify-center  gap-4 mx-20 my-2">
        <button
          className="btn btn-outline  btn-primary"
          onClick={btnIndividuals}
        >
          If you are Individual
        </button>
        <button
          className="btn btn-outline  btn-secondary"
          onClick={btnCompanies}
        >
          If you are Companie
        </button>
      </div> */}

      <INavbar setContent={setContent} />
      <Routes>
        <Route path="/" element={<IHome />} />

        <Route path="/individuals/home" element={<IHome />} />
        <Route path="/companies/home" element={<CHome />} />
        <Route path="/individuals/about" element={<IAbout />} />
        <Route path="/individuals/services" element={<IServices />} />
        <Route path="/individuals/histories" element={<IHistories />} />
        <Route path="/individuals/resources" element={<IResources />} />
        <Route path="/individuals/contact" element={<IContact />} />

        <Route path="/individuals/vacancies" element={<IVacancies />} />

        <Route path="/individuals/vacancies/subway" element={<Subway />} />
        <Route path="/individuals/vacancies/chula" element={<Chula />} />
        <Route path="/individuals/vacancies/karst" element={<Karst />} />
        <Route path="/individuals/vacancies/kuz" element={<Kuz />} />
        <Route path="/individuals/vacancies/midnight" element={<Midnight />} />
        <Route path="/individuals/vacancies/mult" element={<Mult />} />
        <Route
          path="/individuals/vacancies/stoughton"
          element={<Stoughton />}
        />
        <Route
          path="/individuals/vacancies/wilderness"
          element={<Wilderness />}
        />
      </Routes>
      <IFooter />
    </>
  );
};

export default Individuals;
