import ISection from "@/components/individuals/ISection";
import { useEffect } from "react";
import IHeroContact from "@/components/individuals/iContact/IHeroContact";
import IFormContact from "@/components/individuals/IFormContact";

const IContact = () => {
  const steps = [
    {
      id: 1,
      title: "Complete the Online Questionnaire",
      subtitle:
        "Fill out this form to confirm your eligibility for the EB3 Visa.",
    },
    {
      id: 2,
      title: "Upload Documents",
      subtitle: "To complete your profile, upload your passport and US Visa.",
    },
    {
      id: 3,
      title: "Offering Selection",
      subtitle:
        "Choose the job and location from the current available positions offered by our partner employers.",
    },
    {
      id: 4,
      title: "Sign contract and pay Initial fee",
      subtitle:
        "A contract will be sent to you for signature and first payment to BDV will need to be made.",
    },
    {
      id: 5,
      title: "Check Progress through Portal",
      subtitle:
        "As the employer processes your applications, your BDV portal will be updated.",
    },
  ];

  useEffect(() => {
    // Coloca el código del script aquí
    var ifr = document.getElementById("JotFormIFrame-232636593677672");
    if (ifr) {
      var src = ifr.src;
      var iframeParams = [];
      if (window.location.href && window.location.href.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(
          window.location.href
            .substr(window.location.href.indexOf("?") + 1)
            .split("&")
        );
      }
      if (src && src.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(
          src.substr(src.indexOf("?") + 1).split("&")
        );
        src = src.substr(0, src.indexOf("?"));
      }
      iframeParams.push("isIframeEmbed=1");
      ifr.src = src + "?" + iframeParams.join("&");
    }

    window.handleIFrameMessage = function (e) {
      // El código del manejador del mensaje del iframe
      // ...
    };

    if (window.addEventListener) {
      window.addEventListener("message", handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", handleIFrameMessage);
    }
  }, []);

  return (
    <>
      <IHeroContact />
      <ISection title="Contact" color="primary">
        {/* History of EB-3 Solutions */}
        <div className="flex flex-col gap-12 mb-10   ">
          <p className="font-bold text-3xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl ">
            Take action now and apply!
          </p>
          <p className="max-w-[300px] md:max-w-[800px] font-bold text-left">
            Are you keen on obtaining a U.S. Permanent Resident Card (Green
            Card) for yourself and your family? MCC USA collaborates with U.S.
            corporations that are willing to support your Green Card application
            in return for your commitment to work with them for at least one
            year.
          </p>
        </div>

        <iframe
          id="JotFormIFrame-232636593677672"
          title="Eligibility EB3WFS"
          onLoad={() => {
            window.parent.scrollTo(0, 0);
          }}
          allowtransparency="true"
          allowFullScreen="True"
          allow="geolocation; microphone; camera"
          src="https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs"
          frameBorder="0"
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            height: "539px",
            border: "none",
          }}
          scrolling="no"
        ></iframe>
        {/* steps */}
        <h2 className="font-bold text-3xl text-center p-2 text-transparent bg-clip-text  bg-gradient-to-r from-primary to-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl my-8">
          Steps for the On-boarding Process
        </h2>
        <div className=" grid w-full grid-cols-1 gap-8 py-8 px-12 text-center sm:grid-cols-3">
          {steps.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className={`rounded-lg p-6 shadow-md duration-500 hover:scale-105 shadow-primary`}
            >
              <p className="font-bold text-2xl">Step {id}</p>
              <p className="font-bold my-2">{title}</p>
              <p>{subtitle}</p>
            </div>
          ))}
        </div>

        {/* maps */}
        <p>
          Although we don’t have international or other national offices, you
          are welcome to schedule a call with our team by signing up for a free
          account.
        </p>
        <p>We are open Monday through Friday from 9:00am-5:00pm.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.12577150501!2d-80.19247892458863!3d25.76640897734893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b682e4c089c9%3A0xe0d50371e9e8f416!2s777%20Brickell%20Ave%2C%20Miami%2C%20FL%2033131!5e0!3m2!1sen!2sus!4v1696260775392!5m2!1sen!2sus"
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <IFormContact />
        <div className="mb-16" />
      </ISection>
    </>
  );
};

export default IContact;
