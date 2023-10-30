import React, { useState } from 'react';

function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleClear = () => {
    setTitle('');
    setDescription('');
    setImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the post data, e.g., send it to a server or update your state.
    // You can also handle image upload here.
  };

  return (
    <div className="mt-8 mb-12 font-sans">
      <div className="max-w-2xl p-4 mx-auto">
        <h1 className="mb-4 text-3xl font-semibold">Create a Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-medium text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-lg font-medium text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
              rows={8}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-lg font-medium text-gray-600">
              Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-between mx-2 mb-4">
            <button type="button" className="p-3 text-white bg-[#5c5958] rounded-md" onClick={handleClear}>
              Clear
            </button>
            <button type="submit" className="p-3 text-white bg-[#BF5A36] rounded-md">
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePostPage;
