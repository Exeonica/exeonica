import React from "react";

import { ComHeader, Contact, RevenueSection, Footer, ContactUsMap } from "@/components/index";

const ContactUs = () => {
  return (
    <div>
      <ComHeader title={"contact"} />
      <Contact sectionBgColor={"white"} tableBgColor={"color-2"} />
      {/* <ContactUsMap /> */}
      <RevenueSection />
      <Footer />
    </div>
  );
};

export default ContactUs;
