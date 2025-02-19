import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RxDashboard } from "react-icons/rx";
import { GrAnnounce } from "react-icons/gr";
import { FiUser } from "react-icons/fi";

const TabsSidebar = () => {
  return (
    <TabsList className="profile-tabs-buttons block bg-white h-screen w-[30%] pt-7 pb-12 px-5">
      <TabsTrigger value="dashboard">
        <p>
          <RxDashboard />
        </p>
        Dashboard
      </TabsTrigger>
      <TabsTrigger value="account"><p><FiUser /></p>Account</TabsTrigger>
      <TabsTrigger value="profile"><p><GrAnnounce /></p>My Profile</TabsTrigger>
      <TabsTrigger value="promoted-videos">Promoted Videos</TabsTrigger>
      <TabsTrigger value="language">Language</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
      <TabsTrigger value="terms-conditions">Terms & Conditions</TabsTrigger>
      <TabsTrigger value="privacy-policy">Privacy Policy</TabsTrigger>
      <TabsTrigger value="logout">Log Out</TabsTrigger>
    </TabsList>
  );
};

export default TabsSidebar;
