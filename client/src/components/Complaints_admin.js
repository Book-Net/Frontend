import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from "./Button";

function Complaints_admin() {

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const Popup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
 
   <div className='border-2 border-[#F1E6D9] bg-[#F2CB9E] w-4/5 h-[auto] p-4 justify-center'>
    <div className=" bg-gray-200 my-6 justify-center items-center h-auto grid grid-cols-4 gap-4 rounded-md shadow-md">
      <label class="col-span-3 p-5 text-xl text-left self-center">Customer1</label>
      <Button
      className="bg-[#BF5A36] col-span-1 text-white mt-1 w-2/5 font-bold mr-1 p-0"
      type="button"  onClick={Popup}
      >
      View
      </Button>
    </div>


    <div className="bg-gray-200 my-6 justify-center items-center h-auto grid grid-cols-4 gap-4 rounded-md shadow-md">
      <label class="col-span-3 p-5 text-xl text-left self-center">Customer2</label>
      <Button
      className="bg-[#BF5A36] col-span-1 text-white mt-1 w-2/5 font-bold mr-1 p-0"
      type="button"  onClick={Popup}
      >
      View
      </Button>
    </div>

    {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="relative border-[3px] border-[#BF5A36] bg-white rounded-md shadow-lg p-4">
            <label class="p-5 font-bold text-left self-center">Customer 1</label>
            <p>This is my complaint about your web application</p>
            <Button className="text-[#BF5A36]"onClick={Popup}>Close</Button>
          </div>
        </div>
      )}

   </div>

  )
}

export default Complaints_admin;