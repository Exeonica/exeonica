import { RevenueSection, Footer, Hero, Services, Testimonial, Contact, Launch, AboutComponent, FrequentlyAskedQuestions, AchievementCards, ProjectEstimation, SuccessModal } from "@/components/index";

const Home = () => {
  return (
    <div>
      {/* <SuccessModal /> */}
      <ProjectEstimation />
      <Hero />
      <Launch />
      <AboutComponent btnLabel={"aboutUs"} title={"aboutTitle"} description={"aboutDescription"} classes={"!bg-border"} />
      <AchievementCards cardclass={"!bg-white"} btnTitle={"achievementTitle"} heading={"achievementHeading"} classes={"!bg-border"} hiddenClass={"hidden"} />
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
