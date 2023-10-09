import { styles } from "@/styles";
import Tilt from "react-parallax-tilt";

const EbTwoCol = () => {
  return (
    <div className="w-full flex flex-col items-center justify mb-20 mt-10 px-2">
      <p className={`${styles.cTitleText} mb-6`}>EB-3 Visa</p>
      <div className="flex items-center justify-center flex-col md:flex-row gap-10 lg:gap-20 ">
        <Tilt tiltReverse={true}>
          <div className="flex flex-col justify-center items-center gap-4 max-w-[600px] p-4 md:p-10 shadow-md shadow-black rounded-3xl">
            <p className={`${styles.cTitleText}`}>Process Length</p>
            <p className="font-bold">Around 18 months</p>
            <p className={`${styles.sectionText}`}>
              The length of the processing times for the EB3 program varies and
              depends on the location (Longstanding Successcountry of origin)
              and status of the applicant (Consular Process vs. Adjustment of
              Status) and can also depend on the type of industry the applicant
              is sought for.
            </p>
          </div>
        </Tilt>

        <Tilt tiltReverse={true}>
          <div className="flex flex-col justify-center items-center  gap-4 max-w-[600px] p-4 md:p-10 shadow-md shadow-black rounded-3xl">
            <p className={`${styles.cTitleText}`}>Investment</p>
            <p className="font-bold">$400-$1200</p>
            <p className={`${styles.sectionText}`}>
              In order to proceed with the Labor Certificate, compliance with
              regulations necessitates the advertisement of the position to U.S.
              Workers. This process labor certification process, independent of
              the quantity of employees required.
            </p>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default EbTwoCol;
