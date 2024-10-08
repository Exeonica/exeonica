import { RevenueSection, Footer, Hero, Services, EstimationBanner, Testimonial, Contact, FrequentlyAskedQuestions } from "@/components/index";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <EstimationBanner />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Contact />
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default Home;
