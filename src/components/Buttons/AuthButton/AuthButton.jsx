import React from "react";

const AuthButton = ({
  Type,
  onClick,
  Disabled,
  Text,
  iSTransparent,
  CustomWidth,
}) => {
  return (
    <button
      type={Type}
      disabled={Disabled}
      onClick={onClick}
      className={` ${
        iSTransparent
          ? `p-[16px] bg-transparent text-primaryColor h-auto ${
              !CustomWidth ? "max-w-[367px]" : `w-[600px]`
            }  rounded-[12px] text-xs xl:text-base font-semibold leading-[150%] ease-in-out duration-300 hover:bg-primaryColor hover:text-white border-[1px] border-solid hover:border-transparent border-primaryColor`
          : ` p-4 xl:p-[16px] bg-primaryColor text-white h-auto ${
              !CustomWidth ? "max-w-[367px]" : `w-[600px]`
            } rounded-[12px] text-[12px] xs:text-[14px] xl:text-base font-semibold leading-[150%] ease-in-out duration-300 hover:bg-white hover:text-primaryColor border-[1px] border-solid hover:border-primaryColor border-transparent`
      } `}
    >
      {Text}
    </button>
  );
};

export default AuthButton;
