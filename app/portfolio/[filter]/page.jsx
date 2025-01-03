import { ComHeader, PortfolioData, RevenueSection, Footer } from "@/components/index";
import { portfolioFilters } from "@/utils";

const Portfolio = ({ params }) => {
  const { filter } = params;

  return (
    <div>
      <ComHeader title={"portfolioHeader"} />
      <PortfolioData filter={filter} />
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
