import ContactForm from "./contactForm";

import { strings } from "@/utils";
import { MailIcon, PhoneIcon } from "@/public";

const Contact = () => {
  return (
    <div className="bg-border px-[16px] py-[80px] md:gap-x-[35px] md:px-[120px] lg:flex lg:items-center lg:justify-center lg:gap-x-[70px]">
      <div>
        <p className="w-max rounded-[60px] border border-primary px-[16px] py-[10px] text-xs font-normal text-primary md:text-base">{strings["contactTitle"]}</p>
        <p className="my-[18px] text-[28px] font-semibold md:text-[40px]">{strings["contactHeading"]}</p>
        <p className="text-base font-normal text-color-3">{strings["contactDesc"]}</p>
        <div className="space-y-3">
          <div className="mt-10 flex w-max items-center space-x-[10px] rounded-lg border border-white bg-white px-[15px] py-[17px] text-start">
            <div>
              <MailIcon />
            </div>
            <div>
              <p className="text-base font-medium text-black">{strings["email"]}</p>
              <p className="text-base font-normal text-black">{strings["companyMail"]}</p>
            </div>
          </div>
          <div className="mt-10 flex w-max items-center space-x-[10px] rounded-lg border border-white bg-white px-[15px] py-[17px] text-start">
            <div>
              <PhoneIcon />
            </div>
            <div>
              <p className="text-base font-medium text-black">{strings["contact"]}</p>
              <p className="text-base font-normal text-black">{strings["companyContact"]}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
