import AuthLeftSvg from "@/components/AuthLeftSvg/AuthLeftSvg";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import logo from "../assets/images/logo/logo.svg";

const AuthLayout = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <section className=" h-[100vh] w-[100vw] overflow-y-hidden pb-[50px] flex flex-col items-center justify-center   overflow-x-hidden   ">
      {!["/auth/home", "/auth/user-selection"].includes(pathName) && (
        <div className="w-full b flex items-center justify-center ">
          <img
            src={logo}
            className="w-[320px] mt-[50px] h-[90px] object-cover "
            alt="not found"
          />
        </div>
      )}

      {!["/auth/interest"].includes(pathName) ? (
        <div className="flex flex-row gap-x-[30px] 2xl:gap-x-[60px] items-center">
          <AuthLeftSvg />
          <div className="mt-10 px-5 xl:px-0 ">
            <Outlet />
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default AuthLayout;

