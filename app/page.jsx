import { RevenueSection, Footer, Hero, Services, EstimationBanner, Testimonial, Contact, Launch, AboutComponent, FrequentlyAskedQuestions, BlogsSection } from "@/components/index";

const Home = () => {
  return (
    <div>
      <Hero />
      <Launch />
      <AboutComponent btnLabel={"aboutUs"} title={"aboutTitle"} description={"aboutDescription"} />
      <Services />
      <EstimationBanner />
      <BlogsSection />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Contact sectionBgColor={"color-2"} tableBgColor={"white"} />
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default Home;
