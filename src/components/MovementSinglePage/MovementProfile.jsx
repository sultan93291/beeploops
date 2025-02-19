import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
const MovementProfile = ({ item }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-[557px]">
        {/* profile  */}
        <div className="flex items-center gap-[18px]">
          <img
            className="w-[129px] h-[129px] object-cover rounded-full"
            src={item?.image}
            alt=""
          />
          <div>
            <h2 className="text-[20px] font-semibold text-themeBlack">
              {item?.name}
            </h2>
            <p className="mt-[6px] text-sm text-[#a1a1a1]">{item?.author}</p>
          </div>
        </div>
        <p className="text-sm text-[#4d4d4d] font-medium mt-4">{item?.bio}</p>
        <p className="text-themeBlack text-sm mt-2">
          Pdf link: <span className="text-primaryColor hover:underline cursor-pointer">{item?.pdfLink}</span>
        </p>
        <button className="mt-3 py-2 px-4 border border-primaryColor rounded-[8px] flex items-center gap-2 hover:bg-primaryColor hover:text-white duration-200 ease-in-out">
          <p className="text-[20px]"><IoChatbubbleEllipsesOutline /></p>
          <span className="text-sm font-medium">Chat</span>
        </button>
      </div>
      <div className="w-[410px] h-[235px]">
        <video controls className="w-full h-full object-cover">
            <source src={item?.introVideo} />
        </video>
      </div>
    </div>
  );
};

export default MovementProfile;
