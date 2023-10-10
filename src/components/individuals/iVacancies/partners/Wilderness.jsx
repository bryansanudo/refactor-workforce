import ISection from "@/components/individuals/ISection";
import PartnersHero from "./PartnersHero";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import PositionAvailable from "@/components/individuals/iVacancies/PositionAvailable";
import assemblerImg from "@/assets/contact.jpg";
import Responsabilities from "@/components/individuals/iVacancies/Responsabilities";
import { GoDotFill } from "react-icons/go";

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

      <ISection>
        <div className="mx-20 ">
          <PositionAvailable
            cardImg={assemblerImg}
            title="Room Attendant"
            description="Additionally, you will have access to overtime hours that will be paid at 1.5 times your regular salary. $15 USD x 1.5 = $22.5 USD per overtime hour (overtime hours are not guaranteed and are assigned based on management's discretion)."
            usd="15"
          />

          <Responsabilities
            location="Wisconsin"
            locationImg="https://mccusa.co/wp-content/uploads/2022/10/MAPAwisconsin.png"
            p1="Wisconsin Dells, a charming town in the heart of Wisconsin, offers a warm and welcoming home. With its small-town essence and friendly community, it provides a variety of attractions, from quaint cafes to thrilling water parks."
            p2="Discover scenic nature trails, savor local cuisine, and experience a sense of belonging in this picturesque town. Consider Wisconsin Dells as your new home, where you’ll find a cozy atmosphere and exceptional amenities."
          >
            <div className="flex items-center justify-start text-left gap-2 mt-5">
              <div>
                <GoDotFill />
              </div>
              <p>
                Clean guest rooms and guest areas, including making beds,
                dusting, vacuuming, cleaning bathrooms, emptying wastebaskets
                and ashtrays, and replacing supplies.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Clean windows, mirrors, and patios using proper procedures and
                chemicals provided by management, within the allotted time
                period determined by management.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Utilize chemicals according to directions and familiarize
                yourself with all material safety data sheets.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Practice safety procedures, including bending, lifting,
                bloodborne pathogens, and safe use of equipment.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Report hazardous conditions in the work area or equipment to
                management.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>Document and secure lost and found items.</p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Communicate with guests in a professional and friendly manner.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>Document and secure lost and found items.</p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Immediately fill out a maintenance request form and/or missing
                inventory form and submit it to the manager upon discovering any
                damage to the property.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Completely clean out housekeeping cart and storage unit from all
                trash and organize carts/storage units.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Keep supplies ready by restocking the housekeeping cart at the
                end of the shift.
              </p>
            </div>
          </Responsabilities>
        </div>
        <div className="mx-20 ">
          <PositionAvailable
            cardImg={assemblerImg}
            title="Room Attendant"
            description="Additionally, you will have access to overtime hours that will be paid at 1.5 times your regular salary. $15 USD x 1.5 = $22.5 USD per overtime hour (overtime hours are not guaranteed and are assigned based on management's discretion)."
            usd="15"
          />

          <Responsabilities
            location="Wisconsin"
            locationImg="https://mccusa.co/wp-content/uploads/2022/10/MAPAwisconsin.png"
            p1="Wisconsin Dells, a charming town in the heart of Wisconsin, offers a warm and welcoming home. With its small-town essence and friendly community, it provides a variety of attractions, from quaint cafes to thrilling water parks."
            p2="Discover scenic nature trails, savor local cuisine, and experience a sense of belonging in this picturesque town. Consider Wisconsin Dells as your new home, where you’ll find a cozy atmosphere and exceptional amenities."
          >
            <div className="flex items-center justify-start text-left gap-2 mt-5">
              <div>
                <GoDotFill />
              </div>
              <p>
                Clean guest rooms and guest areas, including making beds,
                dusting, vacuuming, cleaning bathrooms, emptying wastebaskets
                and ashtrays, and replacing supplies.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Clean windows, mirrors, and patios using proper procedures and
                chemicals provided by management, within the allotted time
                period determined by management.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Utilize chemicals according to directions and familiarize
                yourself with all material safety data sheets.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Practice safety procedures, including bending, lifting,
                bloodborne pathogens, and safe use of equipment.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Report hazardous conditions in the work area or equipment to
                management.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>Document and secure lost and found items.</p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Communicate with guests in a professional and friendly manner.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>Document and secure lost and found items.</p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Immediately fill out a maintenance request form and/or missing
                inventory form and submit it to the manager upon discovering any
                damage to the property.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Completely clean out housekeeping cart and storage unit from all
                trash and organize carts/storage units.
              </p>
            </div>
            <div className="flex items-center justify-start text-left gap-2">
              <div>
                <GoDotFill />
              </div>
              <p>
                Keep supplies ready by restocking the housekeeping cart at the
                end of the shift.
              </p>
            </div>
          </Responsabilities>
        </div>
      </ISection>
    </>
  );
};

export default Wilderness;
