import Button from "../button";

import ContactForm from "./contactForm";

import { strings } from "@/utils";
import { MailIcon, PhoneIcon } from "@/public";

const Contact = ({ sectionBgColor, tableBgColor }) => {
  return (
    <div className={`bg-${sectionBgColor} px-[16px] py-[80px] md:gap-x-[35px] md:px-[108px] lg:flex lg:items-center lg:justify-between lg:gap-x-[70px]`}>
      <div>
        <Button variant={"outlineRounded"} classes="text-xs md:text-base md:font-normal cursor-default">
          {strings["contactTitle"]}
        </Button>
        <p className="my-[18px] text-[28px] font-semibold md:text-[40px]">{strings["contactHeading"]}</p>
        <p className="text-base font-normal text-color-3">{strings["contactDesc"]}</p>
        <div className="space-y-3">
          <div className={`mt-10 flex w-max items-center space-x-[10px] rounded-lg border border-white bg-white py-[17px] pl-[15px] pr-[50px] text-start`}>
            <div>
              <MailIcon />
            </div>
            <div>
              <p className="text-base font-medium text-black">{strings["email"]}</p>
              <p className="text-base font-normal text-black">{strings["companyMail"]}</p>
            </div>
          </div>
          <div className={`p-[20px]mt-10 flex w-max items-center space-x-[10px] rounded-lg border border-white bg-white py-[17px] pl-[15px] pr-[65px] text-start`}>
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
        <ContactForm tableBgColor={tableBgColor} />
      </div>
    </div>
  );
};

export default Contact;
