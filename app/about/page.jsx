import React from "react";

import Header from "../../components/AboutPage/header";
import AboutUs from "../../components/AboutPage/aboutUs";
import Awards from "../../components/AboutPage/awards";
import Partners from "../../components/AboutPage/partners";
import Footer from "../../components/Footer/index";

const page = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Awards />
      <Partners />
      <Footer />
    </div>
  );
};

export default page;
