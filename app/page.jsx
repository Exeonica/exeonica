import { RevenueSection, Footer, Hero, Services, Testimonial, Contact, Launch, AboutComponent, FrequentlyAskedQuestions, AchievementCards, EstimationBanner } from "@/components/index";
// import { getAllBlogs } from "@/utils";

const Home = async () => {
  // const blogs = await getAllBlogs();

  return (
    <div>
      <Hero />
      <Launch />
      <AboutComponent btnLabel={"aboutUs"} title={"aboutTitle"} description={"aboutDescription"} classes={"!bg-border"} />
      <AchievementCards cardclass={"!bg-white"} btnTitle={"achievementTitle"} heading={"achievementHeading"} classes={"!bg-border"} hiddenClass={"hidden"} />
      <Services />
      <EstimationBanner />
      {/* <BlogsSection blogsData={blogs} /> */}
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Contact sectionBgColor={"color-2"} tableBgColor={"white"} />
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default Home;
