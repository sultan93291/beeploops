import AuthButton from "@/components/Buttons/AuthButton/AuthButton";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AuthForgetPass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = data => {
    console.log("Form Submitted:", data);
    // Perform actions like API requests
    navigate("/auth/otp-verify");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-auto w-auto p-10 border-[1px] border-solid bg-white border-[#BDBDBD] rounded-[10px] gap-y-[18px]  "
    >
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-4 items-center ">
          <h2 className="common-form-heading text-[#333] ">
            Forgot Your Password?
          </h2>
          <p className="common-para-one  text-center max-w-[327px] h-[63px] font-normal ">
            Please enter your registered & we sent an OTP Verification code to
            reset your password.
          </p>
        </div>
        {/* Email Input */}
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email" className="common-form-heading text-[14px]">
            Email
          </label>
          <input
            placeholder="Enter your email address"
            id="email"
            name="email"
            type="email"
            className="form-input"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>
      <AuthButton Text={"Proceed"} />
    </form>
  );
};

export default AuthForgetPass;
