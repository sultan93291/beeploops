import { useState } from "react";
import imageOne from "../../assets/images/join1.png"
import imageTwo from "../../assets/images/join2.png"
import imageThree from "../../assets/images/join3.png"
import PrimaryButton from "./PrimaryButton";

const JoinedMovementCard = ({item}) => {
    const [isJoined, setIsjoined] = useState(false);

    const handleMovementJoin = () => {
        setIsjoined((prev) => !prev)
    }
  return (
    <div className="flex items-center justify-between border p-[10px] rounded-[6px] border-[#F6F6F6]">
      <div className="flex items-start gap-4">
            <img className="w-[70px] min-w-[70px] h-[70px] object-cover" src={item?.img} alt="" />
            <div>
                <h3 className="text-base font-semibold text-themeBlack">{item?.title}</h3>
                <p className="mt-1 text-sm text-[#4D4D4D] w-[220px]">{item?.description}</p>
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
      <div className={`${isJoined ? 'opacity-40 pointer-events-none' : 'opacity-100'}`} onClick={handleMovementJoin}>
        <PrimaryButton text={isJoined ? 'Joined' : 'Join'} px="16" py="8" radius="6" />
      </div>
    </div>
  );
};

export default JoinedMovementCard;