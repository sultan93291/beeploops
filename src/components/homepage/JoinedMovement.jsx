
import { Link } from 'react-router-dom';
import JoinedMovementCard from '../common/JoinedMovementCard';

const myMovementData = [
    {
        id:1,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:2,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:3,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:4,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:5,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    }
]

const MyMovement = () => {
  return (
    <div className='p-4 rounded-[8px] bg-white'>
      {/* title  */}
      <div className='flex items-center justify-between'>
        <p className='text-[18px] text-themeBlack font-semibold'>Joined Movement</p>
        <Link to={'/'} className='inline-block text-primaryColor'>See all</Link>
      </div>
      <div>
        {
            myMovementData.map((item) => (
                <div key={item?.id} className='mt-4'>
                    <JoinedMovementCard item={item} />
                </div>
            ))
        }
        
      </div>
    </div>
  );
};

export default MyMovement;