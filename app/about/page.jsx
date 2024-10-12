import React from "react";

import { ComHeader, Awards, AboutComponent, ChooseUs, RevenueSection, Footer } from "@/components/index";

const AboutUs = () => {
  return (
    <div>
      <ComHeader title={"aboutUs"} />
      <AboutComponent btnLabel={"aboutUs"} title={"aboutTitle"} description={"aboutDescription"} cardclass={"!bg-border"} />
      <ChooseUs />
      <Awards />
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
