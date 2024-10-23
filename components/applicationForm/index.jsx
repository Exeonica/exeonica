"use client";
import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";

import { TextInput, Button } from "@/components/index";
import { sendMail, strings } from "@/utils";
import { applicationTemp } from "@/public";

const inputs = [
  { label: "Name", inputKey: "name", type: "text", placeholder: "Name" },
  { label: "Email", inputKey: "email", type: "email", placeholder: "Email" },
  { label: "WhatsApp Number", inputKey: "whatsappNumber", type: "tel", placeholder: "WhatsApp Number" },
  { label: "Total Experience", inputKey: "totalExperience", type: "number", placeholder: "Total Experience" },
  { label: "Last Degree", inputKey: "lastDegree", type: "text", placeholder: "Last Degree" },
  { label: "Last Degree Completion Year", inputKey: "lastDegreeCompletionYear", type: "number", placeholder: "Last Degree Completion Year" },
  { label: "CGPA", inputKey: "cgpa", type: "number", placeholder: "CGPA" },
  { label: "Cover Letter (optional)", inputKey: "coverLetter", type: "textarea", placeholder: "Cover Letter (optional)" },
];

const ApplicationForm = ({ title, onClose }) => {
  const formRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsappNumber: "",
    totalExperience: "",
    lastDegree: "",
    lastDegreeCompletionYear: "",
    cgpa: "",
    coverLetter: "",
    selectedCV: null,
  });

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleChange = (key, val) => {
    const data = JSON.parse(JSON.stringify(formData));
    data[key] = val;
    setFormData(data);
  };

  const handleSubmit = async () => {
    let isValid = true;

    inputs.forEach((v) => {
      if (!formData[v.inputKey]) {
        isValid = false;
      }
    });

    if (!formData.selectedCV) {
      isValid = false;
    }

    if (!isValid) {
      toast.error("Please fill the form and upload the CV");

      return;
    }

    try {
      setIsLoading(true);

      const formDataCV = new FormData();
      formDataCV.append("file", formData.selectedCV);
      formDataCV.append("email", formData.email);

      const response = await fetch("/api/uploadCV", {
        method: "POST",
        body: formDataCV,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData.message);
        throw new Error("Failed to upload CV");
      }

      const { url } = await response.json();

      const emailData = {
        title,
        name: formData.name,
        email: formData.email,
        whatsappNumber: formData.whatsappNumber,
        totalExperience: formData.totalExperience,
        lastDegree: formData.lastDegree,
        lastDegreeCompletionYear: formData.lastDegreeCompletionYear,
        cgpa: formData.cgpa,
        coverLetter: formData.coverLetter,
        CVURL: url,
      };

      await sendMail(emailData, applicationTemp);
      toast.success("Data Saved");
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      handleChange("selectedCV", file);
    }
  };

  return (
    <div className="relative z-10 flex items-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-color-6 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            ref={formRef}
            className="relative max-h-[70vh] transform overflow-scroll overflow-y-auto rounded-2xl bg-white px-[12px] py-[37px] text-left shadow-xl transition-all md:px-[82px] md:py-[53px]"
          >
            {/* Close Icon */}
            <div className="flex-end flex justify-end">
              <button type="button" onClick={onClose} className="flex text-gray-500 hover:text-gray-700" aria-label="Close">
                <span className="text-[20px] font-bold text-card-foreground">X</span>
              </button>
            </div>

            {/* Title */}
            <div>
              <p className="mb-[35px] text-center text-[28px] font-semibold leading-[41.58px] text-text lg:text-[36px] lg:leading-[53.46px]">Application for {title}</p>
            </div>
            {/* Text Input Fields */}
            {inputs.map((v, i) => (
              <div className="pb-[29px]" key={i}>
                <TextInput type={v.type} inputKey={v.inputKey} placeholder={v.placeholder} value={formData[v.inputKey]} handleChange={handleChange} rows={i === inputs.length - 1 ? 3 : 0} />
              </div>
            ))}
            {/* Upload CV module */}
            <div className="flex flex-row items-center">
              <div>
                <label className="rounded-md bg-border px-[16px] py-[6px] text-[18px] font-light text-text shadow-sm hover:bg-primary hover:text-white" htmlFor="image_uploads">
                  {strings["uploadCV"]}
                </label>
                <input type="file" id="image_uploads" name="image_uploads" accept=".pdf" className="hidden" onChange={handleFileChange} />
              </div>
              <p className="ml-[13px]">{formData.selectedCV?.name || strings["fileAttachment"]}</p>
            </div>

            <div className="mt-[51px] flex !w-full lg:mt-[29px]">
              <Button
                loading={isLoading}
                onClick={() => {
                  handleSubmit();
                }}
                variant="default"
                classes="!w-full rounded-[8px] font-bold border-white px-[64px] py-[12px] text-[16px] text-white justify-center"
              >
                {strings["apply"]}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
