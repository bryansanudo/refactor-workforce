import ISection from "@/components/individuals/ISection";
import { useEffect } from "react";
import IHeroContact from "@/components/individuals/iContact/IHeroContact";
import IFormContact from "@/components/individuals/IFormContact";
import TitleContent from "@/components/individuals/TitleContent";
import { styles } from "@/styles";

const IContact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <TitleContent title="Feel free to apply without the need for any previous experience!">
          <p className={`${styles.sectionText} px-4`}>
            Are you keen on obtaining a U.S. Permanent Resident Card (Green
            Card) for yourself and your family? MCC USA collaborates with U.S.
            corporations that are willing to support your Green Card application
            in return for your commitment to work with them for at least one
            year.
          </p>
        </TitleContent>

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

        <TitleContent title="Steps for the On-boarding Process">
          <ul className="steps steps-vertical text-lg  lg:steps-horizontal px-4 md:mx-32">
            {steps.map(({ id, title, subtitle }) => {
              // Genera un id único para cada elemento de la lista
              const uniqueId = `modal-${id}`;

              return (
                <li key={id} className="step text-black font-bold">
                  <span
                    onClick={() =>
                      document.getElementById(uniqueId).showModal()
                    }
                    className="btn btn-outline btn-primary"
                  >
                    {title}
                  </span>
                  <dialog id={uniqueId} className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button
                          onClick={() =>
                            document.getElementById(uniqueId).close()
                          }
                          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-2xl mb-4">{title}</h3>
                      <p className="text-md text-gray-400 font-normal">
                        {subtitle}
                      </p>
                    </div>
                  </dialog>
                </li>
              );
            })}
          </ul>
        </TitleContent>

        {/*  <TitleContent title="Steps for the On-boarding Process">
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
        </TitleContent> */}

        <TitleContent title="We are open Monday through Friday from 9:00am-5:00pm">
          <p className={`${styles.sectionText}`}>
            Although we don’t have international or other national offices, you
            are welcome to schedule a call with our team by signing up for a
            free account.
          </p>
        </TitleContent>

        <IFormContact />
        {/* <div className="mb-16" /> */}
      </ISection>
    </>
  );
};

export default IContact;
