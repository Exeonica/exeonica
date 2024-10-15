import { RevenueSection, Footer, Hero, Services, Testimonial, Contact, Launch, AboutComponent, FrequentlyAskedQuestions, AchievementCards, ProjectEstimation } from "@/components/index";

const Home = () => {
  const stepData = [
    {
      title: "What describes your needs best?",
      description: "Choose the option that best fits your project needs.",
      options: ["Build an app from Scratch", "Outsource a development team", "Something else"],
    },
    {
      title: "What is your project budget?",
      description: "Select your budget range.",
      options: ["$10,000 - $50,000", "$50,000 - $100,000", "$100,000+"],
    },
    {
      title: "What is your timeline?",
      description: "When do you need to complete the project?",
      options: ["1-3 months", "3-6 months", "6+ months"],
    },
  ];

  return (
    <div>
      <ProjectEstimation data={stepData} />
      {/* <Hero /> */}
      {/* <Launch />
      <AboutComponent btnLabel={"aboutUs"} title={"aboutTitle"} description={"aboutDescription"} classes={"!bg-border"} />
      <AchievementCards cardclass={"!bg-white"} btnTitle={"achievementTitle"} heading={"achievementHeading"} classes={"!bg-border"} hiddenClass={"hidden"} />
      <Services />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Contact sectionBgColor={"color-2"} tableBgColor={"white"} />
      <RevenueSection /> */}
      <Footer />
    </div>
  );
};

export default Home;
