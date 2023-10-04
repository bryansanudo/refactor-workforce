import ISection from "@/components/individuals/ISection";
import JamesBg from "@/assets/James-bg.jpg";
import homeImg from "@/assets/home1.jpg";
import IHeroHome from "@/components/individuals/iHome/IHeroHome";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import ITestimonials from "@/components/individuals/iHome/ITestimonials";
import { RxGear } from "react-icons/rx";
import IFormContact from "@/components/individuals/IFormContact";
import contactImg from "@/assets/contact2.jpg";
import Divider from "@/components/individuals/IDivider";
import ImgContent from "@/components/individuals/ImgContent";
import EbTwoCol from "@/components/individuals/iHome/EbTwoCol";
import TitleContent from "@/components/individuals/TitleContent";
import { styles } from "@/styles";

const IHome = () => {
  return (
    <>
      <IHeroHome />
      <ISection>
        {/* James */}
        <ImgContent
          img={JamesBg}
          title1="Meet The Founder"
          title2="James Baker, CPA"
        >
          <p className={`${styles.sectionText}`}>
            James is the head of different companies around the US, serving
            international Corporations and international entrepreneurs with
            different services and companies. ​ James allied with silent
            investors to create EB-3 Workforce solutions, a company that
            connects employers which are facing a chronic shortage of unskilled
            workers with immigrant employees willing to apply for a US Green
            Card through the EB-3 Visa program.
          </p>
        </ImgContent>

        {/* Divider committed workers */}
        <div className="flex items-center justify-center gap-6 md:gap-40 p-6 flex-col md:flex-row bg-gray-100 w-full ">
          <h1 className="text-4xl font-bold">Get Committed Workers!</h1>
          <div className="flex flex-col items-center justify-center gap-4 text-xl font-bold">
            <div className="bg-white p-3 rounded-full ">
              <BiPhoneCall className="text-4xl text-primary" />
            </div>
            <p>Call Us</p>
            <p>305 564-1311</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 font-bold text-xl">
            <div className="bg-white p-3 rounded-full">
              <AiOutlineMail className="text-primary text-4xl" />
            </div>
            <p>Email</p>
            <p>support@eb3wfs.com</p>
          </div>
        </div>

        {/* Want to know more */}

        <ImgContent
          img={homeImg}
          title1="Contact Us"
          title2="Want to Know More?"
        >
          <p className={`${styles.sectionText}`}>
            If you find yourself in a situation where you are struggling to find
            a significant number of qualified, accessible, and highly motivated
            U.S. employees to fill various entry-level positions, or if you are
            facing challenges with relentless turnover and overwhelming HR
            responsibilities and charges, then we have the perfect solution for
            you.
          </p>
          <p className={`${styles.sectionText}`}>
            Introducing the EB-3 Visa Program, a long-term staffing solution
            specifically designed for U.S. employers like yourself. This
            employment-based Green Card option is tailored to address your
            staffing needs and provide the qualified workforce you require.
          </p>
        </ImgContent>

        {/* EB-3 VISA */}

        <EbTwoCol />

        <Divider />

        {/* EB-3 Worfkforce Solutions */}
        <TitleContent title="EB-3 Workfoce Solutions">
          <p className={`${styles.sectionText}`}>
            At EB3 Workforce Solutions, we understand the importance of finding
            reliable and dedicated employees. That's why we offer a unique
            solution to your staffing needs - EB3 visa workers. Our team is
            dedicated to finding and placing highly qualified personnel who are
            committed to making a positive impact on your business. With a
            rigorous screening process and a network of top-notch talent, we
            ensure that you receive the highest quality workforce available. Say
            goodbye to the struggles of finding committed workers and hello to a
            bright future with EB3 Workforce Solutions.
          </p>
        </TitleContent>

        <ITestimonials />

        {/* Struggling to Find Commited Workers? */}
        <ImgContent
          img={contactImg}
          title2="Struggling to Find Commited Workers?"
        >
          <p className={`${styles.sectionText}`}>
            Discover the solution to your staffing needs with our company! Say
            goodbye to the hassle of unreliable workers and hello to a team of
            dedicated and committed professionals. Our EB3 visa workers are
            handpicked to ensure top-notch performance and complete commitment
            to your projects. Trust us to provide the workforce you deserve."
          </p>
        </ImgContent>

        <IFormContact />

        <Divider />
      </ISection>
    </>
  );
};

export default IHome;
