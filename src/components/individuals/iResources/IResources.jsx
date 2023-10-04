import ISection from "@/components/individuals/ISection";

const IResources = () => {
  const questions = [
    {
      id: 1,
      question: "What is the EB-3 visa category and who is eligible for it?",
      answer:
        "The EB-3 visa category is an employment-based immigration visa for skilled workers, professionals, and unskilled workers. Eligible individuals must have a job offer and a labor certification from the Department of Labor.",
    },
    {
      id: 2,
      question:
        "What is the processing time for an EB-3 visa and how can it be expedited?",
      answer:
        "The processing time for an EB-3 visa can vary and can take several months to several years. There is no way to expedite the process other than through premium processing, which can take 15 calendar days.",
    },
    {
      id: 3,
      question:
        "What is the difference between EB-3 and other employment-based visas?",
      answer:
        "The main difference is the level of skill required for the job offer. EB-3 visas are for less skilled workers, while EB-1 visas are for individuals with extraordinary ability, EB-2 visas are for individuals with advanced degrees or exceptional ability, and EB-4 visas are for religious workers.",
    },
    {
      id: 4,
      question:
        "What are the requirements for an EB-3 petition and what documents are needed?",
      answer:
        "The requirements include a job offer, a labor certification, and an approved Form I-140, Immigrant Petition for Alien Worker. Other required documents include evidence of the individual's qualifications, education, and work experience.",
    },
    {
      id: 5,
      question:
        "What happens if the employee terminates employment before the EB-3 visa expires?",
      answer:
        "If the employee terminates employment before the EB-3 visa expires, the visa will no longer be valid and the worker will have to depart the US.",
    },
    {
      id: 6,
      question:
        "How can an employer recruit foreign workers through the EB-3 process and what are the prevailing wage requirements?",
      answer:
        "An employer can recruit foreign workers by advertising the job opportunity and obtaining a labor certification from the Department of Labor. The employer must pay the prevailing wage for the position, which is the average wage paid to similarly employed workers in the geographic area.",
    },
    {
      id: 7,
      question:
        "Do they have clean records? They need to pass alcohol and drug test before we accept their applications.",
      answer:
        "he various governmental entities involved in the approval process of the green card for the EB3 process require that applicants have no criminal records in any country they have ever lived, in addition, the United States Department of Customs and Immigration Services also preforms an extensive background check, including previous stays in the US.",
    },
    {
      id: 8,
      question: "Are we going to sponsor their Visa?",
      answer:
        "As part of the process with the US Department of Labor you agree to employ the applicant for a minimum of one year, and the applicant as well is required to maintain employment with the employer for a minimum of 12 months.",
    },
    {
      id: 9,
      question:
        "Do I get to choose the applicants? I need applicants who speak, write and understand English. ",
      answer:
        "You are required by law to chose the applicant, neither we nor any other agency or individual is allowed to select the employees for you. As part of our pre-screening process we require the applicants to perform language tests to ascertain English proficiency.",
    },
    {
      id: 10,
      question:
        "Can I get only experienced workers (have worked in warehouse, restaurants, etc)?",
      answer:
        "The EB3 process is for “other” types of employees, those without degree or substantial previous work experience.  However, you are allowed to require that an applicant for a particular position has previous work experience for that position i.e. cooks, warehouse workers etc.",
    },
    {
      id: 11,
      question:
        "Who will interview the applicants? What's the process of the interview?",
      answer:
        "The initial screening of the applicants will be done by our recruitment specialist to ascertain ability and qualification for the EB3 process. Interviews for the actual positions are being done, and in fact have to be done by the employer. ",
    },
    {
      id: 12,
      question:
        "How can I get in touch with EB-3 Workforce Solutions for more information or to start the application process?",
      answer:
        "Please complete the following Form:  https://form.jotform.com/Eb3wfs/eligibility-eb3wfs or send us a message on our WhatsApp line: https://wa.link/z853s6 and we will assist you shortly.",
    },
    {
      id: 13,
      question:
        "What is the EB-3 Visa program, and how can it help my company find qualified workers?",
      answer:
        "The EB-3 Visa program is an employment-based immigration initiative that allows U.S. companies to sponsor foreign workers to obtain a Green Card (permanent residency). This helps your company fill positions facing a chronic shortage of unskilled workers by connecting employers with immigrant employees willing to apply for a Green Card through the EB-3 program. This provides a long-term solution to your qualified workforce needs.",
    },
    {
      id: 14,
      question:
        "What is the typical process and timeframe for obtaining a Green Card through the EB-3 program?",
      answer:
        "The process of obtaining a Green Card through the EB-3 program generally consists of several steps, including obtaining a labor certification, filing a foreign worker petition, and finally, the issuance of the Green Card. The typical timeframe for this process can vary depending on the applicant's location, application status, and industry type. Generally, it takes around 18 months, but this time can vary. It's important to consult with EB-3 Workforce Solutions for a more precise estimate based on your situation.",
    },
  ];

  return (
    <ISection title="Resources" color="primary">
      <p className="font-bold text-3xl p-3 text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl  ">
        Frequently Asked Questions
      </p>
      <div className="flex flex-col items-center justify-center max-w-[1000px] my-10 ">
        {questions.map(({ id, question, answer }) => (
          <div
            key={id}
            tabIndex={0}
            className="collapse collapse-arrow border border-primary bg-base-100 rounded-box w-full"
          >
            <div className="collapse-title text-xl font-medium ">
              {question}
            </div>
            <div className="collapse-content text-left">
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </ISection>
  );
};

export default IResources;
