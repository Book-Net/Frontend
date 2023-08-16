import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai';

const PostActions = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [commentCount, setCommentCount] = useState(3); // For demonstration purposes, start with 3 comments
  const [comments, setComments] = useState([
    "Great post!",
    "Thanks for sharing!",
    "I agree!",
  ]);

  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    // Add your comment logic here
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setCommentCount(commentCount + 1);
      setNewComment('');
    }
  };

  const handleShare = () => {
    // Add your share logic here
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <button
          className={`flex items-center font-bold ${
            isLiked ? 'text-[#BF5A36] font-bold' : 'text-gray-500'
          }`}
          onClick={handleLike}
        >
          <AiOutlineLike className="mr-2 font-bold" />
          Like
        </button>
        <button className="flex items-center font-bold text-gray-500">
          <AiOutlineComment className="mr-2" />
          Comment
        </button>
      </div>
      <div className="space-y-2">
        <p>Total {commentCount} comments</p>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 p-2 border rounded-md focus:outline-none"
        />
        <button
          className="px-4 py-2 text-white font-bold bg-[#BF5A36] rounded-[4px] hover:bg-[#da7d5c]"
          onClick={handleComment}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default PostActions;
