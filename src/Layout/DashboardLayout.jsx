import React from 'react';
import Navbar from '../shared/Navbar';
import Sidebar from '../shared/Sidebar';
import { Outlet } from 'react-router-dom';
import AdsSidebar from '../shared/AdsSidebar';

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
         <div>
           <Sidebar />
         </div>
         <div className='app-component min-h-screen max-h-screen pl-[365px] pr-[345px] pt-[114px]'>
          <Outlet />
         </div>
         <div>
          <AdsSidebar />
         </div>
      </div>
    </div>
  );
};

export default DashboardLayout;