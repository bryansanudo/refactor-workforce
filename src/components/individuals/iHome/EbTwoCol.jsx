import { styles } from "@/styles";

const EbTwoCol = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className={`${styles.titleText}`}>EB-3 Visa</p>
      <div className="flex items-center justify-center flex-col md:flex-row gap-10">
        <div className="flex flex-col justify-center items-center gap-4 max-w-[600px] p-10">
          <p className="text-4xl font-bold">Process Length</p>
          <p className="text-xl font-bold">Around 18 months</p>
          <p className={`${styles.sectionText}`}>
            The length of the processing times for the EB3 program varies and
            depends on the location (Longstanding Successcountry of origin) and
            status of the applicant (Consular Process vs. Adjustment of Status)
            and can also depend on the type of industry the applicant is sought
            for.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center  gap-4 max-w-[600px] p-10">
          <p className="text-4xl font-bold">Investment</p>
          <p className="text-xl font-bold">$400-$1200</p>
          <p className={`${styles.sectionText}`}>
            In order to proceed with the Labor Certificate, compliance with
            regulations necessitates the advertisement of the position to U.S.
            Workers. This process labor certification process, independent of
            the quantity of employees required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EbTwoCol;
