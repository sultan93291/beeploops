

const PrimaryButton = ({text, py, px, radius}) => {
  return (
    <div className='bg-primaryColor text-base text-white font-medium border border-primaryColor duration-200 ease-in-out hover:bg-transparent hover:text-primaryColor cursor-pointer' style={{padding: `${py}px ${px}px`, borderRadius: `${radius}px`}}>
     {text}
    </div>
  );
};

export default PrimaryButton;