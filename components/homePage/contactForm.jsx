"use client";
import { useState } from "react";
import { toast } from "react-toastify";

import Button from "../button";

import { ArrowRight, contactUs } from "@/public";
import { sendMail, strings } from "@/utils";

const ContactForm = () => {
  const [formData, setFormData] = useState({ email: "", name: "", message: "" });

  const handleChange = (key, val) => {
    setFormData((v) => ({
      ...v,
      [key]: val,
    }));
  };

  const handleForm = async () => {
    if (!formData.email || !formData.name || !formData.message) {
      toast.error("Please Enter Data");

      return;
    }

    try {
      toast.info("Sending Mail");

      await sendMail(formData, contactUs);
      toast.success("Mail Sent Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="rounded-lg border border-white bg-white p-10">
      <label className="text-lg font-medium">{strings["nameInput"]}</label>
      <input
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        type="text"
        placeholder="Ex. Jhon Alex"
        className="mb-3 mt-[20px] w-full rounded-[10px] border border-color-1 p-4"
      />
      <label className="text-lg font-medium" htmlFor="">
        {strings["emailInput"]}
      </label>
      <input
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        type="text"
        placeholder="Ex. jhon@gmail.com "
        className="mb-3 mt-[20px] w-full rounded-[10px] border border-color-1 p-4"
      />
      <label className="text-lg font-medium">{strings["messageInput"]}</label>
      <textarea
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
        placeholder="What can we help you with?"
        className="mt-[20px] w-full resize-none rounded-[10px] border border-color-1 p-4"
      />
      <div className="mt-[20px] flex justify-start space-x-2">
        <label className="flex justify-center text-base font-normal">
          <input type="checkbox" className="mr-3 h-[24px] min-h-[24px] w-[24px] min-w-[24px]" />
          I'd like to occasionally receive other communication from Exeonic, such as contact and product news
        </label>
      </div>
      <Button onClick={handleForm} variant="outlineArrow" classes="mt-[20px] bg-primary border-primary text-lg text-white hover:bg-primary/90 hover:text-white rounded-md gap-[5px]">
        {strings["contactBtn"]}
        <ArrowRight />
      </Button>
    </div>
  );
};

export default ContactForm;
