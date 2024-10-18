import { ComHeader, PortfolioData, RevenueSection, Footer } from "@/components/index";
import { portfolioFilters } from "@/utils";

export async function generateStaticParams() {
  return portfolioFilters.map((filter) => ({
    filter: [filter],
  }));
}

const Portfolio = ({ params }) => {
  return (
    <div>
      <ComHeader title={"portfolioHeader"} />
      <PortfolioData filter={params.filter} />
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
