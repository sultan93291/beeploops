import React from "react";
import { useForm } from "react-hook-form";
import AuthButton from "@/components/Buttons/AuthButton/AuthButton";
import { useNavigate } from "react-router-dom";

const AuthOrganizationInfo = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = data => {
    console.log("Form Submitted:", data);
    navigate("/auth/create-pass");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-auto w-auto p-10 border-[1px] gap-y-6 items-center border-solid bg-white border-[#BDBDBD] rounded-[10px]"
    >
      <h4 className="common-form-heading">Organization Information</h4>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-4">
          {/* Organization Name */}
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="name"
              className={`common-form-heading text-[14px] ${
                errors.name ? "text-red-500" : ""
              }`}
            >
              Organization Name
            </label>
            <input
              placeholder={
                errors.name
                  ? errors.name.message
                  : "Enter your organization name"
              }
              id="name"
              type="text"
              className={`form-input ${
                errors.name ? "border-red-500 placeholder-red-500" : ""
              }`}
              {...register("name", {
                required: "Organization name is required",
                onChange: () => clearErrors("name"),
              })}
            />

          </div>

          {/* CIF */}
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="cif"
              className={`common-form-heading text-[14px] ${
                errors.cif ? "text-red-500" : ""
              }`}
            >
              CIF
            </label>
            <input
              placeholder={
                errors.cif ? errors.cif.message : "Enter your CIF info"
              }
              id="cif"
              type="text"
              className={`form-input ${
                errors.cif ? "border-red-500 placeholder-red-500" : ""
              }`}
              {...register("cif", {
                required: "CIF is required",
                onChange: () => clearErrors("cif"),
              })}
            />
            
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
              className={`form-input ${errors.country ? "border-red-500" : ""}`}
              id="country"
              {...register("country", {
                required: "Country is required",
                onChange: () => clearErrors("country"),
              })}
              defaultValue=""
            >
              <option value="" disabled>
                Select your country
              </option>
              <option value="bangladesh">Bangladesh</option>
              <option value="canada">Canada</option>
              <option value="other">Other</option>
            </select>
            
          </div>

          {/* Email */}
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
                errors.email
                  ? errors.email.message
                  : "Enter your organization email"
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

          {/* Website */}
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="website"
              className={`common-form-heading text-[14px] ${
                errors.website ? "text-red-500" : ""
              }`}
            >
              Website
            </label>
            <input
              placeholder={
                errors.website
                  ? errors.website.message
                  : "Enter your organization website"
              }
              id="website"
              type="text"
              className={`form-input ${
                errors.website ? "border-red-500 placeholder-red-500" : ""
              }`}
              {...register("website", {
                required: "Website is required",
                onChange: () => clearErrors("website"),
              })}
            />
            
          </div>
        </div>
        <AuthButton Type="submit" Text="Continue" />
      </div>
    </form>
  );
};

export default AuthOrganizationInfo;
