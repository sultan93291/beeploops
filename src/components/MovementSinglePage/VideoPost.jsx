import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const VideoPost = ({ item }) => {
  return (
    <Link to={'/post/1'} className="relative h-[460px]">
      <video className="w-full h-full object-cover">
        <source src={item?.videoLink} />
      </video>
      <p className="absolute bottom-2 left-3 text-white z-5 flex items-center gap-1">
        <span><FaPlay /></span>
        <span>{item?.views}</span>
      </p>
    </Link>
  );
};

export default VideoPost;
