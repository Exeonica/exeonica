import React from "react";

import { ComHeader, Footer } from "@/components/index";
import { CareersCards } from "@/components/careerPage";
import { getAllCareers } from "@/utils";

const Careers = async () => {
  const careers = await getAllCareers();

  return (
    <div>
      <ComHeader title={"joinUs"} />
      <CareersCards cardsData={careers} />
      <Footer />
    </div>
  );
};

export default Careers;
