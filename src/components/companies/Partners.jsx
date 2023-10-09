import chulaLogo from "@/assets/partners/chula-logo.png";
import lestersLogo from "@/assets/partners/lesters-logo.png";
import stoughtonLogo from "@/assets/partners/stoughton-logo.png";
import subwayLogo from "@/assets/partners/subway-logo.png";
import transportationLogo from "@/assets/partners/transportation-logo.png";
import travelkuzLogo from "@/assets/partners/travelkuz-logo.png";
import wildernessLogo from "@/assets/partners/wilderness-logo.png";
import { styles } from "@/styles";

const Partners = () => {
  return (
    <div className="container my-40 mx-auto px-6">
      <section className="mb-32 text-center">
        <h2 className={`${styles.cTitleText}`}>Our Trusted Partners</h2>

        <div className="grid px-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          <div className="mx-auto mb-12 lg:mb-0 flex items-center justify-center">
            <img src={chulaLogo} className="max-w-[90px] dark:brightness-150" />
          </div>

          <div className="mx-auto mb-12 lg:mb-0 flex items-center justify-center">
            <img
              src={lestersLogo}
              className="max-w-[90px] dark:brightness-150 flex items-center justify-center"
            />
          </div>

          <div className="mx-auto mb-12 lg:mb-0 flex items-center justify-center">
            <img
              src={stoughtonLogo}
              className="max-w-[90px] dark:brightness-150"
            />
          </div>

          <div className="mx-auto mb-12 lg:mb-0 flex items-center justify-center">
            <img
              src={subwayLogo}
              className="max-w-[90px] dark:brightness-150"
            />
          </div>

          <div className="mx-auto mb-12 lg:mb-0 flex items-center justify-center">
            <img
              src={transportationLogo}
              className="max-w-[90px] dark:brightness-150"
            />
          </div>

          <div className="mx-auto mb-12 lg:mb-0 flex items-center justify-center">
            <img
              src={travelkuzLogo}
              className="max-w-[90px] dark:brightness-150"
            />
          </div>
          <div className="mx-auto mb-12 lg:mb-0 flex items-center justify-center">
            <img
              src={wildernessLogo}
              className="max-w-[90px] dark:brightness-150"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
