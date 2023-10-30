import React, { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleClear = () => {
    setTitle("");
    setDescription("");
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    const newErrors = {};

    if (!title) {
      newErrors.title = "Title is required";
    }

    if (!description) {
      newErrors.description = "Description is required";
    }

    if (Object.keys(newErrors).length === 0) {
      // If there are no errors, you can proceed with form submission
      console.log("Form submitted:", { title, description });
    } else {
      // If there are errors, update the state to show them
      setErrors(newErrors);
    }
  };

  return (
    <div className="h-screen">
      <section className="bg-white py-4 w-[850px] m-auto rounded-lg shadow-inherit mt-6">
        <div className="max-w-2xl px-4 py-4 mx-auto">
          <p className="topics text-[#4F6D7A] text-3xl text-center font-semibold mb-8 mt-5">Create Post</p>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-[#BF5A36] text-left">Title</label>
                <input
                  className={`bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                    errors.title ? "border-red-500" : ""
                  }`}
                  placeholder="Title"
                  value={title}
                  onChange={handleTitleChange}
                  required=""
                />
                {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-[#BF5A36] text-left">Description</label>
                <textarea
                  className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#BF5A36] border-opacity-30 focus:ring-primary-500 focus:border-primary-500 ${
                    errors.description ? "border-red-500" : ""
                  }`}
                  placeholder="Your description here"
                  value={description}
                  onChange={handleDescriptionChange}
                  rows={8}
                ></textarea>
                {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleClear}
                className="px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-[#4F6D7A]"
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-[#BF5A36]"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CreatePost;
