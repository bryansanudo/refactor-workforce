import { Routes, Route, useNavigate } from "react-router-dom";
import CNavbar from "@/components/companies/CNavbar";
import CHome from "@/components/companies/CHome";
import CAbout from "@/components/companies/CAbout";
import CServices from "@/components/companies/CServices";
import CHistories from "@/components/companies/CHistories";
import CResources from "@/components/companies/CResources";
import CContact from "@/components/companies/CContact";
import { useEffect } from "react";
const Companies = ({ content, setContent }) => {
  const navigate = useNavigate();
  const btnIndividuals = () => {
    setContent(1);
  };

  const btnCompanies = () => {
    setContent(2);
  };

  useEffect(() => {
    navigate("/companies/home");
  }, []);

  return (
    <>
      <div className="flex items-center flex-col md:flex-row justify-center gap-4 my-2 mx-20">
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
      </div>
      <CNavbar />
      <Routes>
        <Route path="/" element={<CHome />} />

        <Route path="/companies/home" element={<CHome />} />
        <Route path="/companies/about" element={<CAbout />} />
        <Route path="/companies/services" element={<CServices />} />
        <Route path="/companies/histories" element={<CHistories />} />
        <Route path="/companies/resources" element={<CResources />} />
        <Route path="/companies/contact" element={<CContact />} />
      </Routes>
    </>
  );
};

export default Companies;
