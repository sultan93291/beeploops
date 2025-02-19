import { useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import userImg from "../../assets/images/profile-avatar.png";
import Comment from "./Comment";

const initialComments = [
  {
    id: uuidv4(),
    author: "Tariqul Islam",
    text: "An excellent chance to boost speaking skills, & confidence!",
    time: "2 days ago",
    replies: [
      {
        id: uuidv4(),
        author: "Sania Amal",
        text: "Thank you so much. ❤️",
        time: "2 days ago",
      },
    ],
  },
  {
    id: uuidv4(),
    author: "Rakibul Islam",
    text: "An excellent chance to boost speaking skills, & confidence!",
    time: "2 days ago",
    replies: [
      {
        id: uuidv4(),
        author: "Neha Natal",
        text: "good.",
        time: "2 days ago",
      },
    ],
  },
  {
    id: uuidv4(),
    author: "Nehal Chowdhury",
    text: "An excellent chance to boost speaking skills, & confidence!",
    time: "2 days ago",
    replies: [],
  },
];

const CommentSection = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const commentsEndRef = useRef(null);

  // Function to scroll to bottom
  const scrollToBottom = () => {
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // AddComment
  const handleAddComment = (commentText) => {
    if (!commentText.trim()) return;
    const newComment = {
      id: uuidv4(),
      author: "User",
      text: commentText,
      time: "just now",
      replies: [],
    };

    setComments([...comments, newComment]);
    setNewComment("");
    setTimeout(scrollToBottom, 100);
  };

  // add reply
  const handleAddReply = (replyText, parentId) => {
    if (!replyText.trim()) return;

    const updatedComment = comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: uuidv4(),
              author: "User",
              text: replyText,
              time: "just now",
            },
          ],
        };
      } else {
        return comment;
      }
    });

    setComments(updatedComment);
  };

  const handleDelete = (commentId, replyId=null) => {
    if(replyId){
      const updatedComments = comments.map((comment) => {
        if(comment.id === commentId){
          return {
            ...comment,
            replies:comment.replies.filter((reply) => reply.id !== replyId)
          }
        }
        return comment;
      });
      setComments(updatedComments);
    }else{
      setComments(comments.filter((comment) => comment.id !== commentId));
    }
  }

  return (
    <div className="py-6 pl-5 pr-2 bg-white rounded-tl-[16px] rounded-tr-[16px] min-h-[695px]">
      <h3 className="text-lg font-semibold mb-6">
        {comments?.length} Comments
      </h3>
      {/* comments  */}
      <div className="comments-area h-[530px] overflow-y-auto pr-3">
        {comments.map((comment) => (
          <Comment
            key={comment?.id}
            comment={comment}
            parentId={comment.id}
            onAddReply={handleAddReply}
            onDelete={handleDelete}
          />
        ))}
        <div ref={commentsEndRef} />
      </div>
      {/* add comment  */}
      <div className="mt-4 flex justify-end gap-4">
        <img
          className="h-8 w-8 rounded-full object-cover"
          src={userImg}
          alt="userImg"
        />
        <div className="w-full relative">
          <input
            className="border-b border-[#4D4D4D] bg-transparent pb-2 text-sm font-medium focus:outline-none w-full"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          />
          {/* add a new comment button  */}
          <button
            className="absolute bottom-[10px] right-0 h-8 w-8 bg-primaryColor flex items-center justify-center rounded-full text-white"
            onClick={() => handleAddComment(newComment)}
            onChange={(e) => setNewComment(e.target.value)}
          >
            <BsFillSendFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
