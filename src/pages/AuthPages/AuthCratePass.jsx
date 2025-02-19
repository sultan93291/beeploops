import AuthButton from "@/components/Buttons/AuthButton/AuthButton";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const AuthCratePass = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  // Watch the password field to validate confirm password
  const password = watch("password");

  const onSubmit = data => {
    console.log("Form Submitted:", data);
    navigate("/auth/choose-profile-pic");
  };

  const [isPass, setIspass] = useState(true);
  const [isConfirmPass, setIsConfirmpass] = useState(true);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-auto w-auto p-10 border-[1px] border-solid bg-white border-[#BDBDBD] rounded-[10px] gap-y-[30px]"
    >
      <div className="flex flex-col gap-y-6 items-center">
        <h4 className="common-form-heading">Create Password</h4>
        <div className="flex flex-col gap-y-4">
          {/* Password Input */}
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="password"
              className="common-form-heading text-[14px]"
            >
              Set a Password
            </label>
            <div className="relative">
              <input
                placeholder="Enter your password"
                type={isPass ? "password" : "text"}
                className="form-input relative "
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {isPass ? (
                <FaEyeSlash
                  onClick={() => {
                    setIspass(!isPass);
                  }}
                  className="absolute top-1/2 h-5 w-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                />
              ) : (
                <FaEye
                  onClick={() => {
                    setIspass(!isPass);
                  }}
                  className="absolute top-1/2 h-5 w-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="confirmPassword"
              className="common-form-heading text-[14px]"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                placeholder="Confirm your password"
                id="confirmPassword"
                type="password"
                className="form-input"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: value =>
                    value === password || "Passwords do not match",
                })}
              />
              {isConfirmPass ? (
                <FaEyeSlash
                  onClick={() => {
                    setIsConfirmpass(!isConfirmPass);
                  }}
                  className="absolute top-1/2 h-5 w-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                />
              ) : (
                <FaEye
                  onClick={() => {
                    setIsConfirmpass(!isConfirmPass);
                  }}
                  className="absolute top-1/2 h-5 w-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                />
              )}
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <AuthButton Type="submit" Text="Continue" />
    </form>
  );
};

export default AuthCratePass;
