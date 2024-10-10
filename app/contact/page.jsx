import React from "react";

import { Contact, ContactUsMap, RevenueSection, Footer } from "@/components/index";

const ContactUs = () => {
  return (
    <div>
      <Contact sectionBgColor={"white"} tableBgColor={"color-2"} />
      <ContactUsMap />
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default ContactUs;
