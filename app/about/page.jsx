import React from "react";

import { ComHeader, Awards, AboutComponent, ChooseUs, RevenueSection, Footer, AchievementCards } from "@/components/index";

const AboutUs = () => {
  return (
    <div>
      <ComHeader title={"aboutUs"} />
      <AboutComponent btnLabel={"aboutUs"} title={"aboutTitle"} description={"aboutDescription"} classes={"bg-white"} />
      <AchievementCards cardclass={"!bg-border"} btnTitle={"achievementTitle"} heading={"achievementHeading"} hiddenClass={"hidden"} />
      <ChooseUs />
      <Awards />
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
