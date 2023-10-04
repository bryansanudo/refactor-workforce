import { useState } from "react";

import Individuals from "@/components/Individuals";
import Companies from "@/components/Companies";

const App = () => {
  const [content, setContent] = useState(1);

  const btnIndividuals = () => {
    setContent(1);
  };

  const btnCompanies = () => {
    setContent(2);
  };

  return (
    <>
      {/* <div className="flex items-center justify-between mx-20">
        <button onClick={btn1}>If You are Individual</button>
        <button onClick={btn2}>If You are Companie</button>
      </div> */}
      {(() => {
        if (content === 1) {
          return (
            <Individuals
              content={content}
              setContent={setContent}
              btnCompanies={btnCompanies}
              btnIndivituals={btnIndividuals}
            />
          );
        }
        if (content === 2) {
          return (
            <Companies
              content={content}
              setContent={setContent}
              btnCompanies={btnCompanies}
              btnIndivituals={btnIndividuals}
            />
          );
        }
        if (content === 0) {
          return;
        }
      })()}
    </>
  );
};

export default App;
