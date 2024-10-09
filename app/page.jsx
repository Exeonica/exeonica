import { RevenueSection, Footer, Hero, Services, EstimationBanner, Testimonial, Contact, Launch, AboutComponent, FrequentlyAskedQuestions } from "@/components/index";

const Home = () => {
  return (
    <div>
      <Hero />
      <Launch />
      <AboutComponent btnLabel={"aboutUs"} title={"aboutTitle"} description={"aboutDescription"} />
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
