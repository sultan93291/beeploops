import AuthButton from "@/components/Buttons/AuthButton/AuthButton";
import { avatarArr } from "@/components/DummyData/DummyData";
import { Cross } from "@/components/Svg/Svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthProfilePic = () => {
  const [file, setfile] = useState();
  const [Imgurl, setImgurl] = useState();

  const navigate = useNavigate();

  const handleFileUpload = e => {
    const file = e.target.files[0];
    if (file) {
      setfile(file);
      setImgurl("");
      const imageUrl = URL.createObjectURL(file);
      if (imageUrl) {
        setImgurl(imageUrl);
      }
    }
  };

  const handleProfileUpload = e => {
    e.preventDefault();
    if (!file && !Imgurl) {
      toast.error("Upload a Profile picture or select a avatar");
      return;
    } else {
      navigate("/auth/interest");
    }
  };

  return (
    <form className="flex flex-col h-auto w-auto p-10 border-[1px] border-solid bg-white border-[#BDBDBD] rounded-[10px] gap-y-[90px]">
      <div className="flex flex-col items-center gap-y-10 ">
        <div className="flex flex-col gap-y-4 items-center  ">
          <h4 className="common-form-heading">Choose a Profile Picture</h4>
          <p className="text-center common-para-one ">
            Choose a photos that presents you!
          </p>
        </div>
        <div className="flex flex-col gap-y-6 items-center ">
          <div
            className={`h-[192px] w-[192px] rounded-full ease-in-out duration-300  cursor-pointer relative ${
              !Imgurl && "bg-[#CAC6C6]"
            } `}
            style={{
              backgroundImage: `url(${Imgurl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="w-[60px] h-[60px] bg-primaryColor rounded-full absolute bottom-0 right-0 mb-[50px] mr-[-25px] flex items-center justify-center ">
              <Cross />
              <input
                onChange={e => {
                  handleFileUpload(e);
                }}
                accept="image/*"
                type="file"
                className="h-full absolute w-full opacity-0 cursor-pointer "
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-[14px] items-center  ">
            <h5 className="text-base leading-[150%] font-medium text-[#1E1E1E] ">
              Choose a avatar
            </h5>
            <div className="flex flex-row items-center gap-2 flex-wrap w-[184px] ">
              {avatarArr.map((avatar, index) => {
                return (
                  <img
                    onClick={() => {
                      setImgurl(avatar);
                    }}
                    src={avatar}
                    key={index}
                    className="h-10 w-10 cursor-pointer rounded-full"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <AuthButton
        onClick={e => {
          handleProfileUpload(e);
        }}
        Type="submit"
        Text="Continue"
      />
    </form>
  );
};

export default AuthProfilePic;
