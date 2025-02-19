


const NotificationCard = ({item}) => {
  return (
    <div className={`py-[18px] px-4 flex items-center gap-3 relative ${item.status === 'read' ? 'bg-white' : 'bg-[rgba(178,0,0,0.05)]'}`}>
      <img className="min-h-[38px] min-w-[38px] h-[38px] w-[38
      px]" src={item?.avatar} alt="notificationProfile" />
      <div>
        <h4 className="text-base font-semibold text-themeBlack">{item?.sender.length > 19 ? item?.sender.slice(0, 19) + "..." : item?.sender}</h4>
        <p className="text-sm text-[#777] mt-[2px] w-[248px]">
        {item?.message.length > 50 ? item?.message.slice(0, 50) + "..." : item?.message}
        </p>
      </div>
      <p className="absolute top-[15px] right-4 uppercase text-sm text-themeBlack font-medium">{item?.time}</p>
    </div>
  );
};

export default NotificationCard;