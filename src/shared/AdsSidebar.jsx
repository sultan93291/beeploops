import AdsImg from '../assets/images/ads.png';

const AdsSidebar = () => {
  return (
    <div className='fixed top-0 right-0 w-[320px] min-h-screen overflow-y-auto pt-[108px] pr-[60px]'>
      <div className='mt-[30px]'>
        <img className='w-full h-[500px]' src={AdsImg} alt="AdsImg" />
      </div>
    </div>
  );
};

export default AdsSidebar;