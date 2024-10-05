import React from "react";

import { strings } from "@/utils";
import { MailIcon, PhoneIcon } from "@/public";

const Contact = () => {
  return (
    <div className="px-[16px] py-[80px]">
      <div>
        <p className="w-max rounded-[60px] border border-primary px-[16px] py-[10px] text-xs font-normal text-primary md:text-base">{strings["contactTitle"]}</p>
        <p className="my-2 text-[28px] font-semibold md:text-[40px]">{strings["contactHeading"]}</p>
        <p className="text-lg font-normal text-color-3">{strings["contactDesc"]}</p>
        <div>
          <div className="flex gap-x-[14px] text-start">
            <div>
              <MailIcon />
            </div>
            <div>
              <p className="text-xl font-bold text-color-1">{strings["email"]}</p>
              <p className="text-sm font-normal text-black">{strings["companyMail"]}</p>
            </div>
          </div>
          <div className="flex gap-x-[14px] text-start">
            <div>
              <PhoneIcon />
            </div>
            <div>
              <p className="text-xl font-bold text-color-1">{strings["contact"]}</p>
              <p className="text-sm font-normal text-black">{strings["companyContact"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
