import Button from "../button";

import { strings } from "@/utils";
import { MailIcon, PhoneIcon, ArrowRight } from "@/public";

const Contact = () => {
  return (
    <div className="bg-border px-[16px] py-[80px] md:space-x-[35px] md:px-[70px] lg:flex lg:items-center lg:justify-center lg:space-x-[70px] lg:px-[108px]">
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
        <form className="rounded-lg border border-white bg-white p-10">
          <label className="text-base font-medium">{strings["nameInput"]}</label>
          <input type="text" placeHolder="Ex. Jhon Alex" className="mb-[20px] mt-3 w-full rounded-[10px] border border-color-1 p-4" />
          <label className="text-base font-medium" htmlFor="">
            {strings["emailInput"]}
          </label>
          <input type="text" placeHolder="Ex. jhon@gmail.com " className="mb-[20px] mt-3 w-full rounded-[10px] border border-color-1 p-4" />
          <label className="text-base font-medium">{strings["messageInput"]}</label>
          <textarea placeHolder="What can we help you with?" className="mt-3 w-full rounded-[10px] border border-color-1 p-4" />
          <div className="mt-[20px] flex justify-start space-x-2">
            <label className="flex justify-center text-base font-normal">
              <input type="checkbox" className="mr-3 h-[24px] min-h-[24px] w-[24px] min-w-[24px]" />
              I'd like to occasionally receive other communication from Exeonic, such as contact and product news
            </label>
          </div>
          <Button variant="outlineArrow" classes="mt-[20px] bg-primary border-primary text-lg text-white hover:bg-primary/90 hover:text-white rounded-md gap-[5px]">
            {strings["contactBtn"]}
            <ArrowRight />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
