import PostCard from "../components/common/PostCard";
import CommentSection from "../components/PostDetailsPage/CommentSection";


const PostDetailsPage = () => {
  return (
    <section>
      <div className="flex items-startflex-wrap">
        {/* post area  */}
        <div className="w-[60%]">
            <PostCard type="full" />
        </div>
        {/* comments area  */}
        <div className="w-[40%] pl-5">
            <CommentSection />
        </div>
      </div>
    </section>
  );
};

export default PostDetailsPage;