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
