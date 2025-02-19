
import { useState } from "react";
import { Link } from "react-router-dom";
import imageOne from "../../assets/images/join1.png";
import imageTwo from "../../assets/images/join2.png";
import imageThree from "../../assets/images/join3.png";
import PrimaryButton from "./PrimaryButton";

const MyJoinedMovementCard = ({item, name}) => {
   const [isJoined, setIsjoined] = useState(false);
  
      const handleMovementJoin = (e) => {
        e.stopPropagation();
        e.preventDefault();
          setIsjoined((prev) => !prev)
      }

  return (
    <Link to={'/movement/1'} className="flex items-center justify-between border p-[10px] rounded-[6px] border-[#F6F6F6]">
      <div className="flex items-start gap-4">
            <img className="w-[70px] min-w-[70px] h-[70px] object-cover" src={item?.img} alt="" />
            <div>
                <h3 className="text-base font-semibold text-themeBlack">{item?.title}</h3>
                <p className={`mt-1 text-sm text-[#4D4D4D] ${name === 'joined' ? 'w-full' : 'w-[220px]'}`}>{item?.description}</p>
                <div className="flex items-center gap-1 mt-2">
                    <div className="flex items-center">
                        <img className="w-5 h-5 rounded-full bg-cover" src={imageOne} alt="" />
                        <img className="w-5 h-5 rounded-full bg-cover ml-[-7px]" src={imageTwo} alt="" />
                        <img className="w-5 h-5 rounded-full bg-cover ml-[-7px]" src={imageThree} alt="" />
                    </div>
                    <p className="text-primaryColor text-[12px]">+20 Join</p>
                </div>
                <p className="text-sm mt-1 text-[#4D4D4D]">400 Comments . 270 Shares </p>
            </div>
      </div>
      {
        name === 'suggested' && (
          <div className={`${isJoined ? 'opacity-40 pointer-events-none' : 'opacity-100'}`} onClick={(e) => handleMovementJoin(e)}>
            <PrimaryButton text={isJoined ? 'Joined' : 'Join'} px="16" py="8" radius="6" />
          </div>
        )
      }
      
    </Link>
  );
};

export default MyJoinedMovementCard;