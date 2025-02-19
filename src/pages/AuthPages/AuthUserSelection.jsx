import React from "react";
import SiteLogo from "../../assets/images/logo/logo.svg";
import AuthButton from "@/components/Buttons/AuthButton/AuthButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthUserSelection = () => {
  const [isChecked, setisChecked] = useState();
  const handleCheck = e => {
    setisChecked(e.target.checked);
  };
  console.log(isChecked);

  const navigate = useNavigate();

  return (
    <form className="flex flex-col h-auto w-auto p-10 border-[1px] border-solid   bg-white border-[#BDBDBD] rounded-[10px] ">
      <div className="my-[60px] flex flex-col gap-y-[40px] items-center ">
        <img
          src={SiteLogo}
          className="w-[213px] h-[60px] object-cover cursor-default block "
          alt="not found"
        />
        <div className="flex flex-col gap-y-10 items-center ">
          <div className="flex flex-col gap-y-3 max-w-[339px] items-center ">
            <h4 className="common-form-heading">Welcome to Bebloops</h4>
            <p className="text-center common-para-one ">
              Connect with like-minded individuals and organizations to drive
              positive change.
            </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4 w-[344px] ">
              <AuthButton
                Text={"Join as an Individual"}
                onClick={e => {
                  e.preventDefault();
                  if (isChecked) {
                    navigate("/auth/personal-info");
                  } else {
                    toast.error("please agree to join");
                  }
                }}
              />
              <AuthButton
                iSTransparent={true}
                Text={"Organization"}
                onClick={e => {
                  e.preventDefault();
                  if (isChecked) {
                    navigate("/auth/organazition-info");
                  } else {
                    toast.error("please agree to join");
                  }
                }}
              />
            </div>
            <div className="flex flex-row gap-x-2 items-center   ">
              <input
                onChange={handleCheck}
                type="checkbox"
                className=" w-3 h-3 mb-5 "
              />
              <p className="max-w-[340px] common-para-one text-[14px] ">
                I hereby confirm and accept the{" "}
                <span className="text-primaryColor">Terms of Service</span> and
                the <span className="text-primaryColor">Privacy Policy.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AuthUserSelection;
