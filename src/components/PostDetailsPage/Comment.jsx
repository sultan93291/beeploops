import { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import userAvatar from "../../assets/images/poster.png";

const Comment = ({ comment, parentId, onAddReply, onDelete }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [isActionDropOpen, setIsActionDropOpen] = useState(false);

  const handleAddReply = (replyText) => {
    onAddReply(replyText, parentId);
    setShowReplyInput("");
    setReplyText("");
  };

  return (
    <div className="mt-5">
      <div className="flex items-start gap-2 relative">
        <div>
          <img
            className="w-8 min-w-8 h-8 object-cover rounded-full"
            src={userAvatar}
            alt="userAvatar"
          />
        </div>
        <div className="w-full">
          <p className="text-sm font-semibold text-themeBlack">
            {comment?.author}{" "}
            <span className="font-medium text-[12px] pl-[6px] border-l-[1px] border-themeBlack ml-1">
              {comment?.time}
            </span>
          </p>
          <p className="mt-1 text-[15px] text-themeBlack">{comment?.text}</p>
          <div className="comment-actions text-sm mt-2 font-medium hover:text-primaryColor duration-100 ease-in-out">
            <button onClick={() => setShowReplyInput(!showReplyInput)}>
              💬 Reply
            </button>
          </div>
          {showReplyInput && (
            <div className="reply-input relative mt-2">
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="w-full border-b border-themeBlack pb-2 text-sm focus:outline-none"
              />
              <button
                className="reply-button absolute bottom-2 right-1 text-[12px] py-1 px-2 bg-primaryColor text-white rounded-[20px]"
                onClick={() => handleAddReply(replyText)}
              >
                Reply
              </button>
            </div>
          )}
        </div>
        {/* actions  */}
        <div className="absolute top-0 right-0">
          <p
            className="cursor-pointer"
            onClick={() => setIsActionDropOpen(!isActionDropOpen)}
          >
            <TbDotsVertical />
          </p>
          <ul
            className={`w-[80px] bg-white absolute right-0 duration-200 ease-in-out shadow-lg py-3 rounded-[6px] ${
              isActionDropOpen
                ? "opacity-100 visible top-4"
                : "invisible opacity-0 top-5"
            }`}
          >
            <li className="text-sm px-3 py-[2px] duration-100 ease-in-out hover:text-primaryColor font-medium cursor-pointer">
              Edit
            </li>
            <li
              className="text-sm px-3 py-[2px] duration-100 ease-in-out hover:text-primaryColor font-medium cursor-pointer"
              onClick={() => onDelete(comment.id)}
            >
              Delete
            </li>
          </ul>
        </div>
      </div>
      {/* replies  */}
      <div>
        {comment?.replies?.length > 0 && (
          <div className="ml-10">
            {comment?.replies?.map((reply) => (
              <Comment
                key={reply?.id}
                comment={reply}
                parentId={parentId}
                onAddReply={onAddReply}
                onDelete={() => onDelete(comment.id, reply.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
