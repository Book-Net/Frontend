import React from 'react'
import { Link } from 'react-router-dom'
import Button from "./Button";

function Authors_author() {
  return (
    <div >
        <div className='border-2 border-[#F1E6D9] bg-[#F2CB9E] w-4/5 h-[auto] p-4 justify-center'>
          <div className='font-roboto text-3xl flex justify-center'>
              <p className='text-[#BF5A36] font-bold pr-5'>Sales</p>
              <p className='text-[#555555] pl-5'>1000</p>
          </div>        
        </div>
        
        <div>
            <div>
                <p className='font-roboto text-2xl text-center text-[#555555] m-7 mr-20 justify-center'>New Requests</p>
            </div>
            <div className="w-4/5 bg-gray-200 my-7 justify-center items-center h-auto grid grid-cols-3 gap-4 rounded-md shadow-md">
              <label class="col-span-2 p-5 text-xl text-left self-center">Author1</label>
              <Button
              className="bg-[#BF5A36] col-span-1 text-white mt-3 font-bold mr-4 p-0"
              type="submit"
              >
              View
              </Button>
            </div>
        </div>
    </div>

  )
}

export default Authors_author;