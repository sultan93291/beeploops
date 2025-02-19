import React, { useState, useEffect, useRef } from "react";
import lock from "../../assets/images/lock.png";


const PasswordResetSuccessFullModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  const closeModal = () => {
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div  className="fixed inset-0 z-50 bg-overlayBlack  flex justify-center items-center">
      <div ref={modalRef} className="w-[511px] h-[498px] rounded-[61.5px] py-[46.1px] flex flex-col items-center justify-center gap-y-[19.46px]  bg-white ">
        <img src={lock} alt="not found" />
        <h2 className="text-[#696EFF] text-[23.356px] font-medium leading-[150%] w-[188px] text-center ">
          Reset Password Successful !
        </h2>
        <p className="w-[309px] text-center common-para-one text-[14px] ">
          {" "}
          Please wait... You will be directed to the homepage soon.
        </p>

        
      </div>
    </div>
  );
};

export default PasswordResetSuccessFullModal;
