"use client";
import React, { useRef, useEffect } from "react";

const Modal = ({ onClose, children, modalstyle }) => {
  const formRef = useRef(null);

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 flex items-center justify-center bg-color-11 bg-opacity-75 transition-opacity">
        <div ref={formRef} className="relative flex transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="flex flex-1 flex-col items-center justify-center py-[28px]">
            <div className="mr-[80px] w-full items-end justify-end">
              <div className="flex-end flex justify-end">
                <button type="button" onClick={onClose}>
                  <span className="text-[20px] font-bold text-card-foreground">X</span>
                </button>
              </div>
            </div>

            <div className={`${modalstyle}`}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
