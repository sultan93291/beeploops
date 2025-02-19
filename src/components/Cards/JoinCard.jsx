import React, { useState } from "react";
import walking_man from "../../assets/images/walking_man.jpg";
import { RightIcon } from "../Svg/Svg";


const JoinCard = () => {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="flex flex-col w-auto h-auto p-4 gap-y-4 relative bg-white rounded-[8px] border-[1px] border-solid border-[#BCBCBC]   ">
      <div
        className="h-[130px] w-[269px] "
        style={{
          backgroundImage: `url(${walking_man})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex flex-col gap-y-[26px] ">
        <div className="flex flex-col gap-y-[6px]">
          <div className="flex flex-col gap-y-2">
            <h2 className="leading-[150%] font-medium text-[20px] text-[#333] ">
              Health & Wellbeing{" "}
            </h2>
            <h4 className="leading-[150%] font-medium text-[14px] text-[#333] ">
              5000 Member
            </h4>
          </div>
          <span className="leading-[150%] font-medium text-[14px] text-[#333] ">
            New York
          </span>
        </div>
        <button
          onClick={() => {
            setisActive(!isActive);
          }}
          className={`${
            isActive
              ? `px-4 py-2 bg-transparent text-primaryColor h-auto rounded-[12px] text-base font-semibold leading-[150%] ease-in-out duration-300 hover:bg-primaryColor hover:text-white border-[1px] border-solid hover:border-transparent border-primaryColor flex items-center justify-center gap-x-2`
              : `px-4 py-2 bg-primaryColor text-white h-auto rounded-[12px] text-base font-semibold leading-[150%] ease-in-out duration-300 hover:bg-white hover:text-primaryColor border-[1px] border-solid hover:border-primaryColor border-transparent flex items-center justify-center gap-x-2`
          } `}
        >
          {isActive ? (
            <>
              <RightIcon />
              Joined
            </>
          ) : (
            "Join"
          )}
        </button>
      </div>
    </div>
  );
};

export default JoinCard;
