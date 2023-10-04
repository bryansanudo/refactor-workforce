import ISection from "@/components/individuals/ISection";
import contactImg from "@/assets/contact.jpg";
import IHeroAbout from "@/components/individuals/iAbout/IHeroAbout";
import { GiWorld } from "react-icons/gi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import ImgContent from "@/components/individuals/ImgContent";
import Divider from "@/components/individuals/IDivider";
import TitleContent from "@/components/individuals/TitleContent";

const IAbout = () => {
  return (
    <>
      <IHeroAbout />
      <ISection>
        {/* Our Speciality */}
        <ImgContent
          img={contactImg}
          title1="Successful EB-3 Cases with EB-3 Workforce Solutions"
          title2="Our Specialty"
        >
          <p className="text-left mb-6 ">
            Our objective is the same as that of our clients: obtaining their
            U.S. Green Card via the EB-3 Unskilled Visa program.
          </p>
          <p className="text-left ">
            Our recruitment and client engagement specialists have extensive
            experience in the entire EB-3 process. We have partnered with
            immigration attorneys who have over 25 years of experience in the
            field of immigration law and have successfully obtained permanent
            residency status for hundreds of EB-3 applicants.
          </p>
        </ImgContent>

        {/* 2 Columns contend */}
        <div className="flex flex-col items-center justify-center mt-20">
          <h2 className="font-bold text-3xl">
            We have built strong relationships with current and former
            Government officials.
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center  pt-10 gap-20">
            <div className="shadow-primary shadow-lg rounded-3xl md:w-[400px] md:h-[300px] w-[250px] h-[200px] flex flex-col items-center justify-center gap-6 p-3">
              <GiWorld className="text-7xl" />
              <p className="font-bold">
                50 +Countries represented throughout the globe{" "}
              </p>
            </div>
            <div className="shadow-primary shadow-lg rounded-3xl md:w-[400px] md:h-[300px] w-[250px] h-[200px] flex flex-col items-center justify-center gap-6 p-3">
              <BsFillPersonVcardFill className="text-7xl" />
              <p className="font-bold">
                A large number of client green card approvals were granted in
                the year 2022, excluding dependents.
              </p>
            </div>
          </div>
        </div>

        {/* History of EB-3 Solutions */}

        <TitleContent title="History of EB-3 Solutions">
          <p className="max-w-[300px] md:max-w-[800px] text-left">
            History of EB-3 Solutions The corporation EB-3 Workforce Solutions
            has had a substantial effect on the American labor market. By
            concentrating on offering U.S. companies alternatives for hiring
            entry-level workers, EB-3 Workforce Solutions strives to become a
            top supplier of unskilled labor solutions to American firms.
          </p>
          <p className="max-w-[300px] md:max-w-[800px]  text-left">
            To help non-immigrant visa holders change their visa status, and
            assist immigrants in achieving a EB-3 permanent residence Green
            Card, EB-3 Workforce Solutions collaborates with some of the leading
            immigration law firms in the nation. By offering these services,
            EB-3 Workforce Solutions is essential in assisting foreign nationals
            and those with non-immigrant visas to become lawful permanent
            residents of the United States.
          </p>
          <p className="max-w-[300px] md:max-w-[800px]  text-left">
            EB-3 Workforce Solutions assists American companies in hiring the
            qualified personnel they require to expand and prosper. EB-3
            Workforce Solutions has assisted in addressing the persistent lack
            of unskilled employees in the American labor market by acting as a
            link between American firms and overseas workers. We have
            established a solid reputation as a reliable source of talent
            acquisition due to our commitment to quality and our desire to see
            U.S. businesses prosper.
          </p>
        </TitleContent>

        <Divider />
      </ISection>
    </>
  );
};

export default IAbout;
