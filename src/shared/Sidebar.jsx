import { FaRegUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";
import { RiHome6Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import { useState } from "react";

const sidebarMenu = [
    {name:"home", icon:<RiHome6Fill />, path:'/home'},
    {name:"movement", icon:<FaUsers />, path:'/movement'},
    {name:"inbox", icon:<LuMessageCircleMore />, path:'/inbox'},
    {name:"profile", icon:<FaRegUser />, path:'/profile'},
]

const Sidebar = () => {

    const [isSidebarExpand, setIsSidebarExpand] = useState(true);

  return (
    <div className="w-[340px] fixed top-0 left-0 py-9 min-h-screen z-[50] bg-white">
        {/* expand icons  */}
        {/* <p className="text-[30px] text-themeBlack absolute top-10 right-[-12px] cursor-pointer"> 
            {
                isSidebarExpand ? <GoSidebarExpand /> : <GoSidebarCollapse />
            }
            
        </p> */}
        <div>
            {/* header  */}
            <Link to={'/home'} className="inline-block pl-[65px] pr-[129px] pb-[50px]">
                <img className="w-[146px] h-[41px]" src={Logo} alt="" />
            </Link>
            <ul className="pr-1 sidebar-menu overflow-y-scroll h-[calc(100vh-200px)]">
                {
                    sidebarMenu.map((item) => (
                        <li key={item?.name}>
                            <NavLink to={item?.path} className="sidebar-menu-link capitalize text-themeBlack py-[14px] px-[60px] flex items-center gap-[14px] w-full text-[20px] font-medium duration-200 ease-in-out hover:bg-primaryLight rounded-tr-[8px] rounded-br-[8px] hover:text-primaryColor">
                                <span className="text-[22px] text-sidebarIconColor duration-200 ease-in-out">{item?.icon}</span>
                                <p>{item?.name}</p>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  );
};

export default Sidebar;