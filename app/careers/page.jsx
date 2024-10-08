import React from "react";

import { ComHeader, Footer } from "@/components/index";
import { CareersCards } from "@/components/careerPage";

const Careers = () => {
  return (
    <div>
      <ComHeader title={"joinUs"} />
      <CareersCards />
      <Footer />
    </div>
  );
};

export default Careers;
