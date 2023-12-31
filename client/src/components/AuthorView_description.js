import React, { useState } from 'react';
import author from "../assets/author.jpg";
import { AiFillStar } from "react-icons/ai";
import EditPopup from './EditPopup';

function AuthorView_description() {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    return (
        <div className="picture-container1 flex justify-evenly h-72 bg-gradient-to-r from-[#F2CB9E] to-[#F5f5f5] bg-opacity-100 shadow-md hover:shadow-lg transition mx-auto rounded-md">
            <div>
                <label htmlFor="profileImageInput" className="cursor-pointer">
                    <input
                        id="profileImageInput"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                    <img
                        className="w-56 h-56 mt-8 rounded-full cursor-pointer author-pic"
                        src={image ? URL.createObjectURL(image) : author}
                        alt="Author"
                    />
                </label>
            </div>
            <div className="flex flex-col justify-start my-8 mr-14">
                <div className="flex items-center justify-between">
                    <p className="author-name text-[#BF5A36] text-4xl font-medium mt-8 mb-3 mr-3 text-left">Samuel Hartman</p>
                    <EditPopup />
                </div>
                <p className="author-description text-[#4F6D7A] font-semibold text-lg text-left mb-2">samuelhartman@gmail.com</p>
                <p className="author-description font-semibold text-[#4F6D7A] text-lg text-left text-opacity-75">Member Since- 12/05/2019</p>
                <div className="flex items-center mt-3 mb-2 text-yellow-500 ratings ">
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-gray-500" />
                    <p className="ml-1 text-sm text-gray-600 font-roboto">(2.89k)</p>
                </div>
            </div>
        </div>
    );
}

export default AuthorView_description;
