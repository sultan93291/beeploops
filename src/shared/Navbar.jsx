import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import NotificationCard from "../components/Navbar/NotificationCard"
import ProfileAvatar from "../assets/images/profile-avatar.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const notificationData = [
  {
    id: 1,
    sender: "Design Team",
    time: "9:56 AM",
    message: "Your Post is Trending in the hot Section",
    avatar: "https://i.ibb.co.com/RGfC9Bf7/notification-profile.png",
    status: "unread",
  },
  {
    id: 2,
    sender: "SV Marketing Agency",
    time: "9:56 AM",
    message: "You've this month! Keep it up",
    avatar: "https://i.ibb.co.com/G30CTXhS/message.png",
    status: "read",
  },
  {
    id: 3,
    sender: "Design Team",
    time: "9:56 AM",
    message: "Your Post is Trending in the hot Section",
    avatar: "https://i.ibb.co.com/RGfC9Bf7/notification-profile.png",
    status: "read",
  },
  {
    id: 4,
    sender: "SV Marketing Agency",
    time: "9:56 AM",
    message: "Someone commented on your post: Around Heavy ball floor these languag...",
    avatar: "https://i.ibb.co.com/G30CTXhS/message.png",
    status: "unread",
  },
  {
    id: 5,
    sender: "Design Team",
    time: "9:56 AM",
    message: "Your Post is Trending in the hot Section",
    avatar: "https://i.ibb.co.com/G30CTXhS/message.png",
    status: "read",
  },
  {
    id: 6,
    sender: "SV Marketing Agency",
    time: "9:56 AM",
    message: "Someone commented on your post: Around Heavy ball floor these languag...",
    avatar: "https://i.ibb.co.com/G30CTXhS/message.png",
    status: "unread",
  },
  {
    id: 7,
    sender: "Design Team",
    time: "9:56 AM",
    message: "Your Post is Trending in the hot Section",
    avatar: "https://i.ibb.co.com/RGfC9Bf7/notification-profile.png",
    status: "read",
  },
  {
    id: 8,
    sender: "SV Marketing Agency",
    time: "9:56 AM",
    message: "Someone commented on your post: Around Heavy ball floor these languag...",
    avatar: "https://i.ibb.co.com/G30CTXhS/message.png",
    status: "unread",
  },
];


const Navbar = () => {

  const {register, handleSubmit} = useForm();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const notificationDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const notificationButtonRef = useRef(null);
  const profileButtonRef = useRef(null);


  const handleNotificationDropdown = () => {
    setIsNotificationOpen(!isNotificationOpen);
  }

  const handleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen)
  }

  const onSubmit  = (data) => {

  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target) &&
        !notificationButtonRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }

      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target) &&
        !profileButtonRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  return (
    <header className='fixed top-0 left-0 w-full py-9 bg-white flex items-center justify-end pr-[60px] gap-[50px] z-[40]'>
      {/* search form  */}
      <form className='relative w-[557px]' onSubmit={handleSubmit(onSubmit)}>
        <input 
        type="text" 
        placeholder='Search for more interest'
        className='py-[10px] px-4 border border-primaryColor rounded-[8px] w-full bg-white text-sm text-[#555] focus:outline-none'
        {...register('search')}
         />
         <button type='submit' className='h-7 w-7 bg-primaryColor flex items-center justify-center rounded-full text-white text-[22px] absolute top-1/2 right-4 translate-y-[-50%]'>
         <CiSearch />
         </button>
      </form>
      <div className='flex items-center gap-9'>
        {/* notification  */}
        <div className='relative' onClick={handleNotificationDropdown} ref={notificationButtonRef}>
          <p className='text-[#BCBCBC] text-[30px] cursor-pointer'>
          <IoNotifications />
          <span className='w-[12px] h-[12px] rounded-full bg-[#469A4C] absolute top-1 right-1 border-[2px] border-white'></span>
          </p>
          {/* notification dropdown  */}
          <div className={`p-8 pr-[5px] w-[451px] bg-white rounded-[20px] shadow-[0px_7px_20px_0px_rgba(0, 0, 0, 0.06)] absolute top-8 right-0 duration-200 ease-in-out ${isNotificationOpen === true ? 'opacity-100 visible' : 'opacity-0 invisible'}`} ref={notificationDropdownRef}>
            <h4 className='text-[20px] text-themeBlack font-semibold mb-6'>Notifications</h4>
            <div className='max-h-[600px] overflow-y-auto pr-[25px]'>
              {
                notificationData.map((item) => (
                  <NotificationCard key={item?.id} item={item} />
                ))
              }
            </div>
          </div>
        </div>
        {/* profile  */}
        <div className='relative'>
          <div className='flex items-center gap-3 cursor-pointer' onClick={handleProfileDropdown} ref={profileButtonRef}>
              <img className='w-10 h-10 min-w-10' src={ProfileAvatar} alt="ProfileAvatar" />
              <div className='flex items-center gap-2'>
                <p className='text-[18px] font-medium text-themeBlack'>Md Mosharaf</p>
                <p className='text-[18px]'><IoIosArrowDown /></p>
              </div>
          </div>
          {/* profile dropdown  */}
          <ul className={`profile-dropdown duration-200 ease-in-out ${isProfileOpen === true ? 'opacity-100 visible' : 'opacity-0 invisible'}`} ref={profileDropdownRef}>
            <li>
              <Link to={'/'}>Profile Settings</Link>
            </li>
            <li className='logout'>
              <Link to={'/'}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      
    </header>
  );
};

export default Navbar;