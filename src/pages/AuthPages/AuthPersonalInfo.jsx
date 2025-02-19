import React from "react";
import { useForm } from "react-hook-form";
import AuthButton from "@/components/Buttons/AuthButton/AuthButton";
import { useNavigate } from "react-router-dom";

const AuthPersonalInfo = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const onSubmit = data => {
    navigate("/auth/create-pass");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-auto w-auto p-10 border-[1px] gap-y-6 items-center border-solid bg-white border-[#BDBDBD] rounded-[10px]"
    >
      <h4 className="common-form-heading">Personal Information</h4>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-4">
          {/* Name Input */}
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="name"
              className={`common-form-heading text-[14px] ${
                errors.name ? "text-red-500" : ""
              }`}
            >
              Name
            </label>
            <input
              placeholder={
                errors.name ? errors.name.message : "Enter your name"
              }
              id="name"
              type="text"
              className={`form-input ${
                errors.name ? "border-red-500 placeholder-red-500" : ""
              }`}
              {...register("name", {
                required: "Name is required",
                onChange: () => clearErrors("name"),
              })}
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="email"
              className={`common-form-heading text-[14px] ${
                errors.email ? "text-red-500" : ""
              }`}
            >
              Email
            </label>
            <input
              placeholder={
                errors.email ? errors.email.message : "Enter your email"
              }
              id="email"
              type="email"
              className={`form-input ${
                errors.email ? "border-red-500 placeholder-red-500" : ""
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                  message: "Invalid email address",
                },
                onChange: () => clearErrors("email"),
              })}
            />
          </div>

          {/* Date of Birth Input */}
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="date"
              className={`common-form-heading text-[14px] ${
                errors.date ? "text-red-500" : ""
              }`}
            >
              Date Of Birth
            </label>
            <input
              id="date"
              type="date"
              className={`form-input ${
                errors.date ? "border-red-500 text-red-500" : ""
              }`}
              {...register("date", {
                required: "Date of birth is required",
                onChange: () => clearErrors("date"),
              })}
            />
          </div>

          {/* Gender Dropdown */}
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="gender"
              className={`common-form-heading text-[14px] ${
                errors.gender ? "text-red-500" : ""
              }`}
            >
              Gender
            </label>
            <select
              className={`form-input ${
                errors.gender ? "border-red-500 text-red-500" : ""
              }`}
              id="gender"
              {...register("gender", {
                required: "Gender is required",
                onChange: () => clearErrors("gender"),
              })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Country Dropdown */}
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="country"
              className={`common-form-heading text-[14px] ${
                errors.country ? "text-red-500" : ""
              }`}
            >
              Country
            </label>
            <select
              className={`form-input ${
                errors.country ? "border-red-500 text-red-500" : ""
              }`}
              id="country"
              {...register("country", {
                required: "Country is required",
                onChange: () => clearErrors("country"),
              })}
            >
              <option value="">Select your country</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="canada">Canada</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <AuthButton type="submit" Text="Continue" />
      </div>
    </form>
  );
};

export default AuthPersonalInfo;
