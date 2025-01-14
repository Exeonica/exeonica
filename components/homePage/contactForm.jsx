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
      setFormData({ email: "", name: "", message: "" });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`rounded-lg border border-border p-10 bg-${tableBgColor}`}>
      <TextInput
        labelclass="text-lg font-medium"
        classes="mb-3 mt-[20px] w-full rounded-[10px] border border-color-1 p-4 bg-white"
        type={"text"}
        label="nameInput"
        inputKey={"name"}
        placeholder="Ex. Jhon Alex"
        value={formData.name}
        handleChange={handleChange}
        loading={isLoading}
      />

      <TextInput
        labelclass="text-lg font-medium"
        classes="mb-3 mt-[20px] w-full rounded-[10px] border border-color-1 p-4 bg-white"
        type={"email"}
        label="emailInput"
        inputKey={"email"}
        placeholder="Ex. jhon@gmail.com"
        value={formData.email}
        handleChange={handleChange}
        loading={isLoading}
      />
      <TextInput
        labelclass="text-lg font-medium"
        classes="mb-3 mt-[20px] w-full rounded-[10px] border border-color-1 p-4 bg-white"
        label="messageInput"
        placeholder="What can we help you with?"
        handleChange={handleChange}
        value={formData.message}
        rows={2}
        inputKey="message"
        loading={isLoading}
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
        classes={`mt-[20px] bg-primary border-primary text-lg text-white hover:bg-primary/90 hover:text-white rounded-md gap-[5px]`}
        loading={isLoading}
      >
        {strings["contactBtn"]}
        <ArrowRight />
      </Button>
    </div>
  );
};

export default ContactForm;
