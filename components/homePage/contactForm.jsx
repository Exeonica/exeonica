"use client";
import { useState } from "react";
import { toast } from "react-toastify";

import Button from "../button";
import TextInput from "../textInput";

import { ArrowRight, contactUs } from "@/public";
import { sendMail, strings } from "@/utils";

const ContactForm = ({ tableBgColor }) => {
  const [formData, setFormData] = useState({ email: "", name: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      toast.info("Sending Mail");
      await sendMail(formData, contactUs);
      toast.success("Mail Sent Successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`rounded-lg border border-border p-10 bg-${tableBgColor}`}>
      <TextInput
        label="nameInput"
        placeholder="Ex. Jhon Alex"
        classes="mb-3 mt-[20px] w-full rounded-[10px] border border-color-1 p-4 bg-white"
        labelclass="text-lg font-medium"
        onChange={(e) => handleChange("name", e.target.value)}
        value={formData.name}
        disabled={isLoading}
      />
      <TextInput
        label="emailInput"
        placeholder="Ex. jhon@gmail.com"
        classes="mb-3 mt-[20px] w-full rounded-[10px] border border-color-1 p-4 bg-white"
        labelclass="text-lg font-medium"
        onChange={(e) => handleChange("email", e.target.value)}
        value={formData.email}
        disabled={isLoading}
      />
      <label className="text-lg font-medium">{strings["messageInput"]}</label>
      <textarea
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
        placeholder="What can we help you with?"
        className={`mt-[20px] w-full resize-none rounded-[10px] border border-color-1 p-4 ${isLoading ? "cursor-not-allowed" : ""}`}
        disabled={isLoading}
      />
      <div className="mt-[20px] flex justify-start space-x-2">
        <label className="flex justify-center text-base font-normal">
          <input type="checkbox" className="mr-3 h-[24px] min-h-[24px] w-[24px] min-w-[24px]" disabled={isLoading} />
          {strings["checkInput"]}
        </label>
      </div>
      <Button
        onClick={handleForm}
        variant="outlineArrow"
        classes={`mt-[20px] bg-primary border-primary text-lg text-white hover:bg-primary/90 hover:text-white rounded-md gap-[5px] ${isLoading ? "cursor-not-allowed" : ""}`}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="mr-2"></div>
            Loading...
          </div>
        ) : (
          <>
            {strings["contactBtn"]}
            <ArrowRight />
          </>
        )}
      </Button>
    </div>
  );
};

export default ContactForm;
