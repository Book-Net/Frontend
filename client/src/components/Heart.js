import React from 'react'
import { useState } from 'react';

function Heart() {
    const [isLiked, setIsLiked] = useState(false);
  
    const handleHeartClick = () => {
      setIsLiked(!isLiked);
    };
  
    return (
      <div className="flex items-center">
        <button
          className={`text-gray-500 hover:text-red-500 transition-colors duration-300 ${
            isLiked ? 'text-red-500' : ''
          }`}
          onClick={handleHeartClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 21l-1.5-1.5C5 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3 6.86-8.5 11.99L12 21z"
            />
          </svg>
        </button>
      </div>
    );
  }
export default Heart
