import React from "react";

import { Contact, ContactUsMap, RevenueSection, Footer, ComHeader } from "@/components/index";

const ContactUs = () => {
  return (
    <div>
      <ComHeader title={"contactTitle"} />
      <Contact sectionBgColor={"white"} tableBgColor={"color-2"} />
      <ContactUsMap />
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default ContactUs;
