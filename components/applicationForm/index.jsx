"use client";
import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";

import { TextInput, SuccessModal, Button } from "@/components/index";
import { applicants, sendMail, strings, uploadCV } from "@/utils";
import { applicationTemp } from "@/public";
import { TrueArrow } from "@/public";
import moment from "moment";

const inputs = [
  { label: "Name", inputKey: "name", type: "text", placeholder: "Name" },
  { label: "Email", inputKey: "email", type: "email", placeholder: "Email   (Ex.example@gmail.com)" },
  { label: "WhatsApp Number", inputKey: "whatsappNumber", type: "tel", placeholder: "WhatsApp Number  (Ex. +923000000000 or 03000000000)" },
  { label: "Total Experience", inputKey: "totalExperience", type: "number", placeholder: "Total Experience" },
  { label: "Last Degree", inputKey: "lastDegree", type: "text", placeholder: "Last Degree" },
  { label: "Last Degree Completion Year", inputKey: "lastDegreeCompletionYear", type: "number", placeholder: "Last Degree Completion Year" },
  { label: "CGPA", inputKey: "cgpa", type: "number", placeholder: "CGPA" },
  { label: "Cover Letter (optional)", inputKey: "coverLetter", type: "textarea", placeholder: "Cover Letter (optional)" },
];

const ApplicationForm = ({ title, onClose, careerId }) => {
  const formRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [missingFields, setMissingFields] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

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

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    whatsappNumber: "",
  });

  const validateEmail = (email) => {
    email = email.toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };

  const handleCloseForm = () => {
    setModalVisible(false);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^(\+92|0)?[3][0-9]{9}$/;

    return phoneRegex.test(phone);
  };

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
    let missing = [];

    setValidationErrors({ email: "", whatsappNumber: "" });

    inputs.forEach((v, index) => {
      if (index !== 7 && !formData[v.inputKey]) {
        isValid = false;
        missing.push(v.inputKey);
      }
    });

    if (!formData.selectedCV) {
      isValid = false;
      missing.push("selectedCV");
    }

    if (!validateEmail(formData.email)) {
      isValid = false;
      setValidationErrors((prev) => ({ ...prev, email: "Invalid email format" }));
    }

    if (!validatePhone(formData.whatsappNumber)) {
      isValid = false;
      setValidationErrors((prev) => ({ ...prev, whatsappNumber: "Invalid phone number format" }));
    }

    setMissingFields(missing);

    if (!isValid) {
      toast.error("Please fill the highlighted field.");

      return;
    }

    try {
      setIsLoading(true);

      const formDataCV = new FormData();
      formDataCV.append("file", formData.selectedCV);
      formDataCV.append("email", formData.email);

      const url = await uploadCV(formDataCV);
      const timestamp = moment().toISOString();

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

      const applicantData = {
        title,
        name: formData.name,
        email: formData.email,
        whatsappNumber: formData.whatsappNumber,
        totalExperience: formData.totalExperience,
        lastDegree: formData.lastDegree,
        lastDegreeCompletionYear: formData.lastDegreeCompletionYear,
        cgpa: formData.cgpa,
        coverLetter: formData.coverLetter,
        cvLink: url,
        careerId: careerId,
        createdAt: timestamp,
      };
      setModalVisible(true);
      await applicants(applicantData);
      await sendMail(emailData, applicationTemp);
      // toast.success("Data Saved");
      // toast.success("Submit Successfully");
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
      if (file.type === "application/pdf") {
        handleChange("selectedCV", file);
      } else {
        toast.error("Please select a PDF file.");
      }
    }
  };

  return (
    <div className="relative z-10 flex items-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-color-11 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            ref={formRef}
            className="relative max-h-[70vh] transform overflow-scroll overflow-y-auto rounded-2xl bg-white px-[12px] py-[37px] text-left shadow-xl transition-all [-ms-overflow-style:none] [scrollbar-width:none] md:px-[82px] md:py-[53px] [&::-webkit-scrollbar]:hidden"
          >
            <div>
              <p className="mb-[51px] text-center text-[28px] font-semibold leading-[41.58px] text-text lg:text-[36px] lg:leading-[53.46px]">Application for {title}</p>
            </div>
            {inputs.map((v, i) => (
              <div className="pb-[29px]" key={i}>
                <TextInput
                  type={v.type}
                  inputKey={v.inputKey}
                  placeholder={v.placeholder}
                  value={formData[v.inputKey]}
                  handleChange={handleChange}
                  isInvalid={missingFields.includes(v.inputKey) || (v.inputKey === "email" && validationErrors.email) || (v.inputKey === "whatsappNumber" && validationErrors.whatsappNumber)}
                  errorMsg={validationErrors[v.inputKey]}
                  rows={i === inputs.length - 1 ? 3 : 0}
                />
              </div>
            ))}
            <div className="flex flex-col items-start gap-y-2 md:flex-row md:items-center md:gap-y-0">
              <div>
                <label
                  className={`rounded-md px-[16px] py-[6px] text-[18px] font-light shadow-sm hover:bg-primary hover:text-white ${
                    missingFields.includes("selectedCV") ? "bg-red-500 text-white" : "bg-border text-text"
                  }`}
                  htmlFor="image_uploads"
                >
                  {strings["uploadCV"]}
                </label>
                <input type="file" id="image_uploads" name="image_uploads" accept=".pdf" className="hidden" onChange={handleFileChange} />
              </div>
              <p className={`ml-[13px] ${missingFields.includes("selectedCV") ? "text-red-500" : "text-text"}`}>{formData.selectedCV?.name || strings["fileAttachment"]}</p>
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
      {isModalVisible && (
        <SuccessModal onClose={handleCloseForm} modalstyle={"flex flex-col flex-1 justify-center items-center"}>
          <>
            <div className="mb-[20px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary">
              <Image src={TrueArrow} alt={""} className="h-[18.87px] w-[28.33px]" />
            </div>

            <div className="items-center justify-center px-[25.5px] text-center sm:ml-4 sm:mt-0 sm:text-left">
              <p className={`text-center text-[24px] font-semibold leading-[32px] text-text`} id="modal-title">
                {strings["successMsg"]}
              </p>
              <div className="mb-[20px] mt-[16px]">
                <p className={`text-center text-[16px] font-normal leading-[22px] text-color-1`}>{strings["successDescription"]}</p>
              </div>
            </div>
            <Link href={"/"}>
              <Button variant="default">{strings.goToHome}</Button>
            </Link>
          </>
        </SuccessModal>
      )}
    </div>
  );
};

export default ApplicationForm;
