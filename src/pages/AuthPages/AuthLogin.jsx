import React, { useState } from "react";
import AuthButton from "@/components/Buttons/AuthButton/AuthButton";
import { AppleLogo, GoogleLogo } from "@/components/Svg/Svg";
import SiteLogo from "../../assets/images/logo/logo.svg";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AuthLogin = () => {
  const [isPass, setIspass] = useState(true);
  // Initialize react-hook-form
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
    navigate("/home");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-auto w-auto p-10 border-[1px] border-solid bg-white border-[#BDBDBD] rounded-[10px] "
    >
      <div className=" flex flex-col relative w-full  gap-y-[28px] items-center ">
        <div className="flex flex-col gap-y-[28px] relative w-full  ">
          <div className="flex flex-col gap-y-[8.5px] items-start   ">
            <h3 className="common-form-heading">
              Welcome <span className="text-2xl">👋</span>{" "}
            </h3>
            <h4 className="common-para-one">
              Let’s Get You Started With Bebloops
            </h4>
          </div>
          <div className="flex flex-col gap-y-3 w-full relative items-center  ">
            <div className="flex flex-col gap-y-4  ">
              {/* Email Input */}
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="email"
                  className="common-form-heading text-[14px]"
                >
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
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <Link
              to={"/auth/forgot-pass"}
              className="text-[#696EFF] text-[14px] w-full text-end leading-[150%] font-medium cursor-pointer "
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 items-center ">
          <div className="flex flex-col gap-y-[18px]">
            <div className="flex flex-row items-center gap-x-6 px-6 py-[14px] border-[1px] border-solid border-[#DADADA] rounded-[12px] cursor-pointer ">
              <GoogleLogo />
              <span className="common-para-one ">
                Sign In Using Google Account
              </span>
            </div>
            <div className="flex flex-row items-center gap-x-6 px-6 py-[14px] border-[1px] border-solid border-[#DADADA] rounded-[12px] cursor-pointer ">
              <AppleLogo />
              <span className="common-para-one ">
                Sign In Using Apple Account
              </span>
            </div>
            <AuthButton Type={"submit"} Text={"Login"} />
          </div>
          <h4 className=" text-defaultGray  font-medium font-Urbanist leading-[160%] ">
            Don’t have an account?{" "}
            <Link
              to={"/auth/personal-info"}
              className="font-montserrat text-primaryGreen leading-[150%] cursor-pointer "
            >
              Register Now
            </Link>{" "}
          </h4>
        </div>
      </div>
    </form>
  );
};

export default AuthLogin;
