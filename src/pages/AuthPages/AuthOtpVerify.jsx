import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import AuthButton from "@/components/Buttons/AuthButton/AuthButton";
import { useNavigate } from "react-router-dom";

const AuthOtpVerify = () => {
  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      otpOne: "",
      otpTwo: "",
      otpThree: "",
      otpFour: "",
    },
  });

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const getNextInputName = currentName => {
    const fields = ["otpOne", "otpTwo", "otpThree", "otpFour"];
    const currentIndex = fields.indexOf(currentName);
    return currentIndex < fields.length - 1 ? fields[currentIndex + 1] : null;
  };

  const getPrevInputName = currentName => {
    const fields = ["otpOne", "otpTwo", "otpThree", "otpFour"];
    const currentIndex = fields.indexOf(currentName);
    return currentIndex > 0 ? fields[currentIndex - 1] : null;
  };

  const handleInputChange = (e, field) => {
    setError(""); // Clear error when user types
    const { value } = e.target;

    if (/^\d?$/.test(value)) {
      setValue(field, value);

      // If the value is not empty, move to the next field (if exists)
      if (value) {
        // Ensure that the first field (otpOne) is filled before moving to the second one
        if (field === "otpOne" || getValues("otpOne")) {
          const nextInput = getNextInputName(field);
          if (nextInput)
            document.querySelector(`input[name="${nextInput}"]`)?.focus();
        }
      }
    }
  };

  const handleKeyDown = (e, field) => {
    if (e.key === "Backspace" && !getValues(field)) {
      const prevInput = getPrevInputName(field);
      if (prevInput)
        document.querySelector(`input[name="${prevInput}"]`)?.focus();
    }
  };

  const handlePaste = e => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (/^\d{4}$/.test(pasteData)) {
      pasteData.split("").forEach((num, index) => {
        setValue(`otp${index + 1}`, num);
      });
      document.querySelector(`input[name="otpFour"]`)?.focus();
    }
  };

  const onSubmit = data => {
    const otpValues = Object.values(data);
    if (otpValues.some(value => value === "")) {
      setError("Please enter all four digits of the OTP.");
      return;
    } else {
      navigate("/auth/reset-pass");
    }

    const otpCode = otpValues.join("");
    console.log("OTP Submitted:", otpCode);
    // Add API call or verification logic here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-auto w-auto p-10 border border-solid bg-white border-[#BDBDBD] rounded-[10px] gap-y-[20px]"
    >
      <div className="flex flex-col gap-y-4 items-center">
        <h2 className="common-form-heading text-[#333]">OTP Verification</h2>
        <p className="common-para-one text-center max-w-[327px] h-[63px] text-[#5C5C5C] font-normal">
          Please enter the 4-digit verification code sent to ******234@Gmail.com
        </p>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row gap-x-5 w-full items-center">
          {["otpOne", "otpTwo", "otpThree", "otpFour"].map(name => (
            <Controller
              key={name}
              name={name}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  maxLength={1}
                  className="h-[60px] w-[70px] bg-[#E0E0E0] outline-none rounded-[8px] text-center text-xl font-semibold"
                  onChange={e => handleInputChange(e, name)}
                  onKeyDown={e => handleKeyDown(e, name)}
                  onPaste={handlePaste}
                />
              )}
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <h4 className="text-[#B5B5B5] text-[14px] font-normal leading-[160%] text-center">
          Didn't get a code?{" "}
          <span className="font-montserrat text-primaryGreen font-medium cursor-pointer">
            Click to resend
          </span>{" "}
          <span className="text-[14px] font-medium text-[#ACADB9]">
            (04:30)
          </span>
        </h4>
      </div>

      <AuthButton Text="Verify OTP" />
    </form>
  );
};

export default AuthOtpVerify;
