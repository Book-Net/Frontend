import React, { useState } from 'react';

const StarRating = () => {
    const maxRating = 5;
    const [userRating, setUserRating] = useState(0);

    return (
        <div className=" bg-[#F2CB9E] bg-opacity-60 py-3 mt-14 shadow-xl shadow-slate-100 hover:shadow-lg transition mx-auto rounded-md">
            <p className="topics text-[#4F6D7A] text-2xl text-center font-medium  mb-7">Rate for this Author</p>
            <div className="flex justify-center items-center">
                <div className="flex items-center">
                    {[...Array(maxRating)].map((_, index) => (
                        <svg
                            key={index}
                            className={`w-10 h-10 fill-current cursor-pointer ${index < userRating ? 'text-yellow-500' : 'text-gray-500'
                                }`}
                            viewBox="0 0 24 24"
                            onClick={() => setUserRating(index + 1)}
                        >
                            <path d="M12 2L9.7 9H3l5 4.6L5.6 21 12 16.7 18.4 21 16 13.6 21 9h-6.7L12 2z" />
                        </svg>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StarRating;
