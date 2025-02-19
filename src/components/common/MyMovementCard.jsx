import { useEffect, useRef, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";

const actions = ["edit", "share", "delete"];

const MyMovementCard = ({ item }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const dropdownLinkRef = useRef(null);

  const handleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };
  const handleItemClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(!isDropdownOpen);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <Link
      to={"/movement/1"}
      className="relative flex items-center gap-4 border border-[#F6F6F6] rounded-[6px] p-[10px]"
    >
      <img
        className="w-[70px] min-w-[70px] h-[70px] object-cover"
        src={item?.img}
        alt=""
      />
      <div>
        <h3 className="text-base font-semibold text-themeBlack">
          {item?.title}
        </h3>
        <p className="mt-1 text-sm text-[#4D4D4D]">{item?.description}</p>
      </div>
      <div className="absolute top-[10px] right-2">
        <p
          onClick={(e) => handleDropdown(e)}
          ref={dropdownButtonRef}
          className="cursor-pointer"
        >
          <HiOutlineDotsVertical />
        </p>
        <ul
          className={`py-[6px] px-[18px] absolute right-0 w-[80px] bg-white shadow-lg rounded-[8px] duration-200 ease-in-out ${
            isDropdownOpen === true
              ? "opacity-100 visible top-[15px]"
              : "opacity-0 invisible top-5"
          } z-[10]`}
          ref={dropdownRef}
        >
          {actions.map((item) => (
            <li
              className="py-[2px] text-[13px] font-medium text-themeBlack capitalize cursor-pointer duration-200 ease-in-out hover:text-primaryColor"
              key={item}
              onClick={(e) => handleItemClick(e)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default MyMovementCard;
