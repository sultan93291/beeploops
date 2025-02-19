import profileImg from "../assets/images/movement-proffile.png";
import introVideo from "../assets/videos/intro.mp4";
import postVideo1 from "../assets/videos/post-video1.mp4";
import postVideo2 from "../assets/videos/post-video2.mp4";
import postVideo3 from "../assets/videos/post-video3.mp4";
import postVideo4 from "../assets/videos/post-video4.mp4";
import CreatePostSingle from "../components/MovementSinglePage/CreatePostSingle";
import MovementProfile from "../components/MovementSinglePage/MovementProfile";
import VideoPost from "../components/MovementSinglePage/VideoPost";

const movementProfile = {
  name: "Design team move.",
  author: "Individual . Admin",
  bio: "The Public Speaking Practice Workshop startin people at all skill.The Public Speaking Practice Workshop startin people at all skill. The Public Speaking Practice Workshop startin people at all skill.  ",
  pdfLink: "dec05cd97csxdf",
  image: profileImg,
  introVideo: introVideo,
};

const allPosts = [
  {
    id: 1,
    videoLink: postVideo4,
    views: "2.1M",
  },
  {
    id: 2,
    videoLink: postVideo1,
    views: "2.1M",
  },
  {
    id: 3,
    videoLink: postVideo3,
    views: "2.1M",
  },
  {
    id: 4,
    videoLink: postVideo2,
    views: "2.1M",
  },
  {
    id: 5,
    videoLink: postVideo3,
    views: "2.1M",
  },
  {
    id: 6,
    videoLink: postVideo4,
    views: "2.1M",
  },
];

const MovementSinglePage = () => {
  return (
    <section className="pt-6 pb-6">
      <div className="bg-white p-5 rounded-[16px]">
        <MovementProfile item={movementProfile} />
        <div className="pt-4 mt-6 border-t border-[#ECEBEB]">
          <div className="w-[422px]">
            <CreatePostSingle />
          </div>
          {/* all post  */}
          <div className="grid grid-cols-3 gap-1 mt-5">
            {allPosts.map((post) => (
              <VideoPost item={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovementSinglePage;
