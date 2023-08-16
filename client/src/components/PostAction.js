import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai';

const PostActions = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [showComments, setShowComments] = useState(false); // Track whether to show comments
    const [likeCount, setLikeCount] = useState(5); // For demonstration purposes, start with 7 likes
    const [commentCount, setCommentCount] = useState(3); // For demonstration purposes, start with 3 comments
    const [comments, setComments] = useState([
        { user: 'Lahiru Sanjana', text: 'I have one' },
        { user: 'Samitha Rathnayake', text: 'Where are you from?' },
        { user: 'Naveendra', text: 'I have a new book' },
    ]);
  
    const [newComment, setNewComment] = useState('');
  
    const handleLike = () => {
      setIsLiked(!isLiked);
      setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
      setCommentCount(isLiked ? commentCount - 1 : commentCount);
    };

  const handleCommentIconClick = () => {
    setShowComments(!showComments);
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
      <div className="flex justify-around space-x-2">
        <button
          className={`flex items-center font-bold ${
            isLiked ? 'text-[#BF5A36] font-bold' : 'text-gray-500'
          }`}
          onClick={handleLike}
        >
          <AiOutlineLike className="mr-2 font-bold" />
          Like{likeCount > 0 && <span className="mr-1">({likeCount})</span>}
        </button>
        <button
          className={`flex items-center font-bold text-gray-500`}
          onClick={handleCommentIconClick}
        >
          <AiOutlineComment className="mr-2" />
          Comment {commentCount > 0 && <span>({commentCount})</span>}
        </button>
      </div>
      {showComments && (
        <div className="space-y-2 text-left ml-7 text-gray-500">
          {comments.map((comment, index) => (
            <p key={index}>
              <span className="font-semibold">{comment.user}: </span>
              {comment.text}
            </p>
          ))}
        </div>
        
      )}
      <div className="flex space-x-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 p-2 border ml-2 rounded-md focus:outline-none"
        />
        <button
          className="px-4 py-[5px] text-white mr-2 font-bold bg-[#BF5A36] rounded-[4px] hover:bg-[#9e553b]"
          onClick={handleComment}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default PostActions;
