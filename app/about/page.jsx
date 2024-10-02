import React from "react";

import Header from "../../components/AboutPage/header";
import AboutUs from "../../components/AboutPage/aboutUs";
import Awards from "../../components/AboutPage/awards";
import Partners from "../../components/AboutPage/partners";

const page = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Awards />
      <Partners />
    </div>
  );
};

export default page;
