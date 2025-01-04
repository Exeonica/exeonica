import { ComHeader, PortfolioData, RevenueSection, Footer } from "@/components/index";

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
