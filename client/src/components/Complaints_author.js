import React from 'react'
import { Link } from 'react-router-dom'
import Button from "./Button";

function Complaints_author() {
  return (
 
   <div className='border-2 border-[#F1E6D9] bg-[#F2CB9E] w-4/5 h-[auto] p-4 justify-center'>
    <div className=" bg-gray-200 my-6 justify-center items-center h-auto grid grid-cols-4 gap-4 rounded-md shadow-md">
      <label class="col-span-3 p-5 text-xl text-left self-center">Customer1</label>
      <Button
      className="bg-[#BF5A36] col-span-1 text-white mt-1 w-2/5 font-bold mr-1 p-0"
      type="submit"
      >
      View
      </Button>
    </div>

    <div className="bg-gray-200 my-6 justify-center items-center h-auto grid grid-cols-4 gap-4 rounded-md shadow-md">
      <label class="col-span-3 p-5 text-xl text-left self-center">Customer2</label>
      <Button
      className="bg-[#BF5A36] col-span-1 text-white mt-1 w-2/5 font-bold mr-1 p-0"
      type="submit"
      >
      View
      </Button>
    </div>
   </div>

  )
}

export default Complaints_author;