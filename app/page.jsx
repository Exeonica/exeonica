import { RevenueSection, Footer, Hero, Services, EstimationBanner, Testimonial, Contact, FrequentlyAskedQuestions, AboutComponent } from "@/components/index";

const Home = () => {
  return (
    <div>
      <Hero />
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
