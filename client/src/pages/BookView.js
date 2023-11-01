import React, { useState } from "react";
import largeImage from "../assets/The Great Gatsby.jpg";
import smallImage1 from "../assets/The Great Gatsby2.jpg";
import smallImage2 from "../assets/The Great Gatsby3.jpg";

function BookView() {
  const [mainImageSrc, setMainImageSrc] = useState(largeImage);

  const changeImage = (imageSrc) => {
    setMainImageSrc(imageSrc);
  };

  return (
    <div className="max-w-5xl p-8 mx-auto bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-2xl font-semibold text-gray-600">Title</label>
        <span className="text-gray-900">The Great Gatsby</span>
      </div>
      <div className="mb-4">
        <img id="main-image" src={mainImageSrc} alt="Book Cover" className="mx-auto mb-4 rounded-lg" />
      </div>
      <div className="flex justify-center mb-4">
        <img className="w-16 h-16 mx-2 thumbnail-img" src={smallImage1} alt="Small Image 1" onClick={() => changeImage(smallImage1)} />
        <img className="w-16 h-16 mx-2 thumbnail-img" src={smallImage2} alt="Small Image 2" onClick={() => changeImage(smallImage2)} />
        <img className="w-16 h-16 mx-2 thumbnail-img" src={largeImage} alt="Main Image" onClick={() => changeImage(largeImage)} />
      </div>
      <div className="mb-4">
        <label className="block font-semibold text-gray-600">Author</label>
        <span className="text-gray-900">F. Scott Fitzgerald</span>
      </div>
      <div className="mb-4">
        <label className="block font-semibold text-gray-600">Condition</label>
        <span className="text-gray-900">Brand New</span>
      </div>
      <div className="mb-4">
        <label className="block font-semibold text-gray-600">Publication Year</label>
        <span className="text-gray-900">1925</span>
      </div>
      <div className="mb-4">
        <label className="block font-semibold text-gray-600">Description</label>
        <p className="text-gray-900">
          The Great Gatsby is a novel written by F. Scott Fitzgerald that follows the lives of the wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.
        </p>
      </div>
    </div>
  );
}

export default BookView;
