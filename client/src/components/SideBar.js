import React, { useState } from 'react';

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex">
      
        <div className="flex flex-col space-y-2 font-semibold ml-[70px]">
          <button
            className={`py-2 px-8 rounded-[4px] ${
              activeTab === 1 ? 'bg-[#BF5A36] text-white' : 'hover:bg-gray-300'
            }`}
            onClick={() => handleTabChange(1)}
          >
            Add Post
          </button>
          <button
            className={`py-2 rounded-[4px] ${
              activeTab === 2 ? 'bg-[#BF5A36] text-white' : 'hover:bg-gray-300'
            }`}
            onClick={() => handleTabChange(2)}
          >
            Saved
          </button>
          <button
            className={`py-2 rounded-[4px] ${
              activeTab === 3 ? 'bg-[#BF5A36] text-white' : 'hover:bg-gray-300'
            }`}
            onClick={() => handleTabChange(3)}
          >
            e-Library
          </button>
        </div>
      </div>
   
  );
};

export default SideBar;
