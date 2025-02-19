import React, { useEffect, useRef, useState } from 'react';
import { FaPlayCircle,FaPauseCircle } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import PosterImg from "../../assets/images/poster.png";
import { IoIosShareAlt } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import postVideo from '../../assets/videos/video1.mp4'
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const PostCard = ({type}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isActionDropdownOpen, setisActionDropdownOpen] = useState(false)
    const videoRef = useRef(null); 
    const actionDropdownRef = useRef()
    const actionDropdownButtonRef = useRef()

    const togglePlayPause = () => {
        if(videoRef.current){
            if(isPlaying){
                videoRef.current.pause();
            }else{
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    const handleActionDropdown = () => {
        setisActionDropdownOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                actionDropdownRef.current &&
                !actionDropdownRef.current.contains(event.target) &&
                actionDropdownButtonRef.current &&
                !actionDropdownButtonRef.current.contains(event.target)
            ) {
                setisActionDropdownOpen(false);
            }
        };

        if (isActionDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActionDropdownOpen])
    
  return (
    <div className='py-5 px-6 bg-white rounded-[8px] post-card mb-7'>
        {/* Profile Section */}
        <div className='flex items-start justify-between'>
            <div className='flex items-start gap-4'>
                <img className='h-10 w-10 min-w-10 rounded-full object-cover' src={PosterImg} alt="poster-img" />
                <div>
                    <h3 className='text-[20px] font-semibold text-themeBlack'>Design team move.</h3>
                    <p className='mt-1 text-sm text-themeBlack font-semibold'>Sania Amal <span className='text-[#767676] text-[12px]'>(Individual)</span></p>
                    <p className='mt-2 text-sm text-themeBlack'>3 days ago</p>
                </div>
            </div>
            {/* action  */}
            <div className='relative'>
                <p className='cursor-pointer' onClick={handleActionDropdown} ref={actionDropdownButtonRef}><HiOutlineDotsHorizontal /></p>
                {/* action dropdown  */}
                <ul className={`absolute right-0 w-[160px] bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.14)] py-2 rounded-[8px] duration-200 ease-in-out ${isActionDropdownOpen === true ? 'opacity-100 visible top-4' : 'opacity-0 invisible top-5'}`} ref={actionDropdownRef}>
                    <li>
                        <Link className='px-4 text-sm block py-1 duration-200 ease-in-out hover:text-primaryColor' to={'/'}>Report post</Link>
                    </li>
                    <li>
                        <Link className='px-4 text-sm block py-1 duration-200 ease-in-out hover:text-primaryColor' to={'/'}>Leave Movement</Link>
                    </li>
                </ul>
            </div>
        </div>
      
      {/* Post Title */}
      <h2 className="mt-4 font-semibold text-lg text-gray-900">
        Public Speaking Practice Workshop for All Level People from February
      </h2>
      {/* Media Section */}
      <div className='relative mt-4 media'>
        <video className='w-full h-[392px] rounded-[10px] object-cover' ref={videoRef} >
            <source src={postVideo} />
        </video>
        <button className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[40px] text-sidebarIconColor duration-100 ease-in-out ${isPlaying ? 'opacity-0' : 'opacity-100'}`} onClick={togglePlayPause}>
        {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
        </button>
      </div>
      {/* engagement options  */}
      <div className='flex items-center justify-between mt-4'>
        {/* views  */}
        <Link to={'/post/1'} className='flex items-center gap-2 cursor-pointer engagement-option'>
            <p className='text-[20px]'>
                <IoEyeOutline />
            </p>
            <p className='text-sm text-themeBlack'>
                5k views
            </p>
        </Link>
        <div className='flex items-center gap-9'>
            {/* share  */}
            <div className='flex items-center gap-2 cursor-pointer engagement-option'>
                <p className='text-[20px]'>
                <IoIosShareAlt />
                </p>
                <p className='text-sm text-themeBlack'>
                    155
                </p>
            </div>
            {/* comment  */}
            <Link to={'/post/1'} className='flex items-center gap-2 cursor-pointer engagement-option'>
                <p className='text-[20px]'>
                <FaRegComment />
                </p>
                <p className='text-sm text-themeBlack'>
                    225
                </p>
            </Link>
            {/* donate button  */}
            <Link to={'/donation'} className='inline-block'>
                <PrimaryButton text="Donate" py="10" px="20" radius="8" />
            </Link>
        </div>
      </div>
      {/* Description */}
      <p className="mt-3 text-base text-themeBlack font-medium">
        The Public Speaking Practice Workshop starting in February sounds like a great opportunity for people at all skill levels to refine their...{" "}
        {
            type !== 'full' && (<Link className="text-blue-500 cursor-pointer">See more</Link>)
        }
      </p>
    </div>
  );
};

export default PostCard;