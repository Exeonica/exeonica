import React from "react";

import AboutSection from "../../components/AboutSection";
import ChooseUs from "../../components/chooseUs";
import RevenueSection from "../../components/revenueSection";
import Footer from "../../components/Footer";
import { Header, Awards } from "@/components/AboutPage";

const page = () => {
  return (
    <div>
      <Header />
      <AboutSection />
      <ChooseUs />
      <Awards />
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default page;
