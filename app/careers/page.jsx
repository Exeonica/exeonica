import React from "react";

import { ComHeader, Footer } from "@/components/index";
import { CareersCards } from "@/components/careerPage";
import { getAllCareers } from "@/utils";

const Careers = async () => {
  const careers = await getAllCareers();

  return (
    <div>
      <ComHeader title={"joinUs"} />
      {careers.length > 0 ? <CareersCards cardsData={careers} /> : <p className="my-10 items-center justify-center text-xl font-semibold text-card-foreground">No Job Available.</p>}

      <Footer />
    </div>
  );
};

export default Careers;
