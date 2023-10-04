import React from "react";
import ISection from "@/components/individuals/ISection";

import IFormContact from "@/components/individuals/IFormContact";

import IServicesCard from "@/components/individuals/iServices/IServicesCard";
import proccessImg from "@/assets/proccess.jpg";
import IHeroServices from "@/components/individuals/iServices/IHeroServices";
import jobImg from "@/assets/job.jpg";
import writingImg from "@/assets/writing.jpg";
import { GoDotFill } from "react-icons/go";
import { FaFileContract } from "react-icons/fa";
import coWorkersImg from "@/assets/coworkers.jpg";
import especialistImg from "@/assets/especialist.jpg";
import TitleContent from "@/components/individuals/TitleContent";
import Divider from "@/components/individuals/IDivider";
import ImgContent from "@/components/individuals/ImgContent";

const IServices = () => {
  return (
    <>
      <>
        <IHeroServices />
        <ISection title="Home" color="primary">
          <IServicesCard />

          {/*Timeline  Process */}

          <TitleContent title="Timeline of the proccess">
            <img src={proccessImg} alt="" />
          </TitleContent>

          <IFormContact />

          {/* Longstanding Success */}
          <TitleContent title="Longstanding Success">
            <p className="max-w-[300px] md:max-w-[800px] text-left ">
              The EB-3 'Other Workers' Visa, created by the US Government,
              provides an opportunity for foreign nationals to work in positions
              experiencing chronic labor shortages. With a yearly allocation of
              40,000 visas, the EB-3 program is a valuable solution for many.
              However, the most challenging aspect of the process is finding an
              employer who is willing and able to sponsor. This is where EB-3
              Workforce Solutions comes in. We partner with qualified employers,
              ensuring a smooth and successful sponsorship process for all
              parties involved.
            </p>
            <p className="max-w-[300px] md:max-w-[800px] text-left ">
              The EB-3 "Other Workers" Visa is a great way to become a permanent
              resident of the United States. You can get this visa by changing
              your status or by going through consular processing in your home
              country. If you qualify, so do your spouse and any unmarried
              children under 21.
            </p>
          </TitleContent>

          {/* Who is eligible for EB3? */}
          <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
            <div className="md:w-1/2 flex items-center justify-center ">
              <img
                src={jobImg}
                className="rounded-3xl w-[500px] object-contain mask mask-parallelogram"
              />
            </div>
            <div className="md:w-1/2 max-w-[500px]">
              <div className="flex items-center justify-center flex-col ">
                <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl  ">
                  Who is eligible for EB3?
                </p>
              </div>

              <div className="flex items-center justify-start gap-2 mt-5">
                <div>
                  <GoDotFill />
                </div>
                <p>No degree requirements needed</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <GoDotFill />
                </div>
                <p>No prior work experience needed</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <GoDotFill />
                </div>
                <p>Can’t be overqualified</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <GoDotFill />
                </div>
                <p>Need an employer sponsor</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <GoDotFill />
                </div>
                <p>You can adjust your visa status within the U.S.</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <GoDotFill />
                </div>
                <p>You can apply from your home country</p>
              </div>
            </div>
          </div>

          {/* What does the process entail? */}
          <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
            <div className="md:w-1/2 max-w-[500px]">
              <div className="flex items-center justify-center flex-col ">
                <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl  ">
                  What does the process entail?
                </p>
              </div>

              <div className="flex items-center justify-start gap-4 mt-5">
                <div>
                  <GoDotFill />
                </div>
                <p className="text-left">
                  EB-3:(A) Professionals - This category is for foreign workers
                  who have a bachelor's degree or higher, or equivalent
                  education and experience in a specific field.
                </p>
              </div>
              <div className="flex items-center justify-start gap-4 mt-5">
                <div>
                  <GoDotFill />
                </div>
                <p className="text-left">
                  EB-3(B): Skilled Workers - This category is for foreign
                  workers who have at least two years of job experience or
                  training in a skilled occupation that requires a minimum of
                  two years of training or experience.
                </p>
              </div>
              <div className="flex items-center justify-start gap-4 mt-5">
                <div>
                  <GoDotFill />
                </div>
                <p className="text-left">
                  EB-3(C): Unskilled Workers - This category is for foreign
                  workers who are performing unskilled labor that requires less
                  than two years of training or experience
                </p>
              </div>
              <p className="font-bold mt-8 text-xl">
                The EB-3 visa process involves the following steps:
              </p>
              <div className="flex items-center justify-start gap-4 mt-5">
                <div>
                  <GoDotFill />
                </div>
                <p className="text-left">
                  A U.S. employer must first obtain a labor certification from
                  the U.S. Department of Labor, indicating that there are no
                  qualified U.S. workers available to fill the position.
                </p>
              </div>
              <div className="flex items-center justify-start gap-4 mt-5">
                <div>
                  <GoDotFill />
                </div>
                <p className="text-left">
                  Once the labor certification is approved, a Form I-140 must be
                  filed with the U.S. Citizenship and Immigration Services,
                  Petition for Alien Worker, on behalf of the foreign worker.
                </p>
              </div>
              <div className="flex items-center justify-start gap-4 mt-5">
                <div>
                  <GoDotFill />
                </div>
                <p className="text-left">
                  After the Form I-140 is approved, the foreign worker can apply
                  for an immigrant visa at a U.S. consulate or embassy in their
                  home country, or if the foreign worker is already in the U.S.,
                  they may apply for an adjustment of status to become a
                  permanent resident.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 mt-5">
                <div>
                  <GoDotFill />
                </div>
                <p className="text-left">
                  The final step is for the foreign worker to attend an
                  interview with a U.S. consular officer or USCIS officer and
                  provide any additional documents or information as requested.
                  If approved, the foreign worker can enter the U.S. or adjust
                  their status to become a permanent resident.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center ">
              <img
                src={writingImg}
                className="rounded-3xl w-[500px] object-contain mask mask-parallelogram"
              />
            </div>
          </div>

          {/* Why work with an agency */}
          <div className="mt-20">
            <h2 className="font-bold p-3 text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl">
              Why work with an agency?
            </h2>
            <p className="text-lg text-gray-700 my-6">
              There many benefits to working with an experienced agency:
            </p>
            <div className="flex gap-6 text-lg text-gray-700">
              <div>
                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">Proven track record</p>
                </div>
                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">Government connections</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">Many qualified job options</p>
                </div>
                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">Employer sourcing</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">case management services</p>
                </div>
                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">Community of applicants</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">Attorney pairing</p>
                </div>
                <div className="flex items-center justify-start gap-4 mt-5">
                  <div>
                    <GoDotFill />
                  </div>
                  <p className="text-left">Relocation services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why does this process work? */}
          <TitleContent title=" Why does this process work?">
            <p className="max-w-[300px] md:max-w-[800px] text-left ">
              Employers are having a harder time than ever before finding people
              to fill their low-skilled jobs. Industries like cleaning, food
              service, packing, and storage have been hit the hardest. Instead
              of closing their doors, many businesses have tried to find
              creative ways to find people to work for them. Many employers have
              found it helpful to sponsor potential immigrants who are willing
              to fill open positions with the help of an EB-3 visa for unskilled
              workers.
            </p>
            <p className="max-w-[300px] md:max-w-[800px] text-left ">
              The Immigration Act of 1990 set up a program called
              "Employment-Based Visas," which lets US businesses sponsor foreign
              workers who want to work and are qualified to do so. There are
              five types of EB visas. The first two require skilled work and a
              lot of schooling, while part of the third type (the EB-3) is for
              people who can do unskilled work for their future employers.
            </p>
            <p className="max-w-[300px] md:max-w-[800px] text-left ">
              The EB-3 "Other Worker" Visa process leads directly to permanent
              residency in the U.S., and the terms are better than most of the
              other ways to get there.
            </p>
          </TitleContent>

          <Divider />

          {/* ***OUR SERVICES *** */}

          {/* What we do */}
          <TitleContent title="What We Do">
            <p className="max-w-[300px] md:max-w-[800px] text-left ">
              Experience a seamless process in securing EB3 visa workers with
              our comprehensive support. From the very beginning, our team is
              dedicated to finding and vetting potential candidates, and
              preparing your company for sponsorship. And we don't stop there -
              even after their Green Card is approved, we continue to provide
              assistance throughout the transition to work and ongoing
              employment. Partner with us and experience the peace of mind that
              comes with having experts by your side every step of the way.
            </p>
          </TitleContent>

          {/* 4 Emojis */}
          <div className="stats stats-vertical lg:stats-horizontal shadow my-10">
            <div className="stat">
              <div className="stat-title">
                <FaFileContract className="text-7xl mx-auto" />
              </div>
              <div className="mt-2">Recruit and vet employer sponsors</div>
            </div>

            <div className="stat">
              <div className="stat-title">
                <FaFileContract className="text-7xl mx-auto" />
              </div>
              <div className="mt-2">Case management services</div>
            </div>

            <div className="stat">
              <div className="stat-title">
                <FaFileContract className="text-7xl mx-auto" />
              </div>
              <div className="mt-2">Attorney pairing</div>
            </div>

            <div className="stat">
              <div className="stat-title">
                <FaFileContract className="text-7xl mx-auto" />
              </div>
              <div className="mt-2">Relocation services</div>
            </div>
          </div>

          {/* How it works */}
          <ImgContent img={coWorkersImg} title2="How It Works">
            <p className="max-w-[300px] md:max-w-[800px] text-left">
              Join the growing list of satisfied clients who have benefited from
              our expertise in the EB3 Unskilled Visa process. We specialize in
              connecting employers with highly skilled foreign nationals,
              bridging the gap in the American workforce and helping to drive
              your business forward. Trust us to simplify the process and
              deliver the results you need to succeed.
            </p>
            <div className="flex flex-col items-start ml-4 mt-4">
              <p>
                <span className="font-bold">1.</span> Determine your eligibility
                and select an employer sponsor
              </p>
              <p>
                <span className="font-bold">2.</span> File and apply for the
                process with our partner attorneys
              </p>
              <p>
                <span className="font-bold">3.</span> Get your Green Card or
                work authorization
              </p>
              <p>
                <span className="font-bold">4.</span> Begin working for your
                employer
              </p>
              <p>
                <span className="font-bold">5.</span> Live in the U.S.A as an
                immigrant visa holder!
              </p>
            </div>
          </ImgContent>
          <Divider />
          {/* Our expertise */}
          <ImgContent
            img={especialistImg}
            title1="Successful EB-3 Cases with EB-3 Workforce Solutions"
            title2="Our Expertise"
          >
            <p className="max-w-[300px] md:max-w-[800px] text-left">
              Our goal is the same as our clients: for them to receive their
              U.S. Green Card through the EB-3 Unskilled Visa program.
            </p>
            <p className="max-w-[300px] md:max-w-[800px] text-left ">
              We have had several instances that were successful. In order to
              showcase the diverse experiences of someone going through this
              procedure, EB-3 Workforce Solutions has analyzed the best course
              of action for the different staffing needs that your business
              might have. Everybody who goes through this process will have a
              different timetable and procedure.
            </p>
          </ImgContent>
        </ISection>
      </>
    </>
  );
};

export default IServices;
