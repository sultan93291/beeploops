import React from 'react';
import PostCard from '../components/common/PostCard';
import CreatePost from '../components/common/CreatePost';
import MyMovement from '../components/homepage/MyMovement';
import JoinedMovement from "../components/homepage/JoinedMovement"

const HomePage = () => {
  return (
    <div className='flex items-start flex-wrap'>
      <div className='w-[60%] h-[calc(100vh-114px)] overflow-y-auto post-area pt-6'>
        <div className='mb-8'>
         <CreatePost />
        </div>
        <PostCard />
        <PostCard />
      </div>
      <div className='w-[40%] h-[calc(100vh-114px)] overflow-y-auto pl-6 pb-8 movement-area pt-6'>
        <MyMovement />
        <div className='mt-6'>
          <JoinedMovement />
        </div>
      </div>
    </div>
  );
};

export default HomePage;