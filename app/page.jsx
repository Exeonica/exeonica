import { RevenueSection, Footer, Hero, Services, Testimonial, Contact, Launch, AboutComponent, FrequentlyAskedQuestions } from "@/components/index";

const Home = () => {
  return (
    <div>
      <Hero />
      <Launch />
      <AboutComponent btnLabel={"aboutUs"} title={"aboutTitle"} description={"aboutDescription"} classes={"bg-color-9"} />
      <Services />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Contact sectionBgColor={"color-2"} tableBgColor={"white"} />
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default Home;
