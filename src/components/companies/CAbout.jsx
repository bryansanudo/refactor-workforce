import CSection from "@/components/individuals/ISection";
import CHero from "@/components/companies/CHero";

const CAbout = () => {
  return (
    <>
      <CHero title="about" bg="url(/c-about.jpg)" />
      <CSection title="About Us" color="secondary">
        <div></div>
      </CSection>
    </>
  );
};

export default CAbout;
