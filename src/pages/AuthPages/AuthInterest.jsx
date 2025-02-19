import AuthButton from "@/components/Buttons/AuthButton/AuthButton";
import JoinCard from "@/components/Cards/JoinCard";
import {
  AccordionCancel,
  AccordionCross,
  Dropdown,
  SearchIcon,
} from "@/components/Svg/Svg";
import * as Accordion from "@radix-ui/react-accordion"; // Correct import
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthInterest = () => {
  const [selctedValue, setselctedValue] = useState([]);
  const [step, setstep] = useState(1);
  const options = [
    "Art & Culture",
    "Learn",
    "Sports",
    "Social Activities",
    "Health & Wellbeing",
    "Craft",
  ];

  const navigate = useNavigate()

  // State to manage the default open item
  const [openItem, setOpenItem] = useState("item-0");

  const handleSelection = value => {
    setselctedValue(prevState => {
      // Check if the value is already selected
      if (prevState.includes(value)) {
        // If it's already in the array, remove it (toggle functionality)
        return prevState.filter(item => item !== value);
      } else {
        // Otherwise, add the new value
        return [...prevState, value];
      }
    });
  };

  console.log(selctedValue);

  return (
    <section className="pt-5 flex flex-col gap-y-10 items-center">
      {step === 1 ? (
        <div className="flex flex-col gap-y-6 items-center ">
          <h6 className="common-para-one">Step 1 of 2</h6>
          <div className="flex flex-col gap-y-4 items-center ">
            <h2 className="common-form-heading font-bold text-2xl   ">
              Get started by picking a few interests
            </h2>
            <span className="common-para-one font-medium ">
              Pick your favorite interests to find groups and related to them
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-6 items-center ">
          <h6 className="common-para-one">Step 2 of 2</h6>
          <div className="flex flex-col gap-y-4 items-center ">
            <h2 className="common-form-heading font-bold text-2xl   ">
              Find a movement to join now
            </h2>
            <span className="common-para-one font-medium max-w-[388px] text-center ">
              Join movement to start and get suggestion what you to join
            </span>
          </div>
        </div>
      )}
      {step === 1 ? (
        <div className="flex flex-col gap-y-8 h-[400px] overflow-y-scroll py-4 px-5 ">
          <div className="relative w-full">
            <input
              placeholder="Search for more interest"
              type="text"
              className="pl-[23.5px] pr-[60px] py-4 w-full outline-none rounded-[8px] border-[1px] border-solid border-primaryColor common-para-one "
            />
            <div className="absolute top-0 right-0 w-[28px] h-[28px] bg-primaryColor rounded-full transform translate-y-1/2 mr-[23.5px] flex items-center justify-center cursor-pointer  ">
              <SearchIcon />
            </div>
          </div>
          <Accordion.Root
            type="single"
            collapsible
            value={openItem} // Set default value to open a specific accordion item
            onValueChange={setOpenItem} // Update state on accordion item change
            className="flex flex-col gap-y-4"
          >
            {[0, 1, 2, 3].map((item, index) => (
              <Accordion.Item
                key={index}
                className="w-[600px] min-h-[50px] rounded-[8px] border-[1px] border-solid border-[#DADADA]"
                value={`item-${index}`} // Set unique value for each item
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full flex-row justify-between items-center px-4 py-2">
                    <span className="common-form-heading text-base">
                      Art & Culture
                    </span>
                    <Dropdown />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-3 py-4 flex flex-row gap-[14px] flex-wrap">
                  {/* The content will only be shown when the accordion item is open */}
                  {options.map((Option, optionIndex) => {
                    const isSelected = selctedValue.includes(Option);
                    return (
                      <div
                        className={`${
                          isSelected
                            ? ` border-transparent bg-primaryColor`
                            : ` border-[#A1A1A1] bg-transparent `
                        } flex items-center py-1 cursor-pointer flex-row gap-x-[2px] px-2 rounded-[8px] border-[1px] border-solid`}
                        key={optionIndex}
                        onClick={() => {
                          handleSelection(Option);
                        }}
                      >
                        <span
                          className={`${
                            isSelected ? `text-white` : "text-defaultGray"
                          } text-base font-medium leading-[150%] `}
                        >
                          {Option}
                        </span>
                        <div className="w-[30px]">
                          {isSelected ? (
                            <AccordionCancel />
                          ) : (
                            <AccordionCross />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      ) : (
        <div className="flex flex-row gap-6 mx-[100px] w-[1520px] h-[350px] overflow-y-scroll items-center justify-center flex-wrap ">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
            return <JoinCard key={index} />;
          })}
        </div>
      )}
      <AuthButton onClick={(e) => {
        e.preventDefault();
        if (step === 1) {
          setstep(2)
        } else if(step === 2) {
          navigate('/home')
          setstep(1)
        }
      }} CustomWidth={true} Text={"Next"} />
    </section>
  );
};

export default AuthInterest;
