import React from "react";

import { ComHeader, PortfolioData, RevenueSection, Footer } from "@/components/index";

const Portfolio = () => {
  return (
    <div>
      <ComHeader title={"portfolioHeader"} />
      <PortfolioData />
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
