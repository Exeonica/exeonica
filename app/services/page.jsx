import React from "react";

import { ComHeader, Services, ChooseUs, FrequentlyAskedQuestions, RevenueSection, Footer } from "@/components/index";

const ServicesSection = () => {
  return (
    <div>
      <ComHeader title={"servicesHeader"} />
      <Services />
      <ChooseUs />
      <FrequentlyAskedQuestions />
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default ServicesSection;
