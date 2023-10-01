import React from 'react'
import { Link } from 'react-router-dom'
import Button from "./Button";

function Complaints_author() {
  return (
    <div className='border-2 border-[#F1E6D9] w-[180px] h-[270px] p-0 min-w-[200px] '>
        <div className='bg-[#F2CB9E]'>
            <div className='flex justify-start'><p className='font-roboto text-2xl text-[#BF5A36] font-bold pl-3 pt-4 pb-0 '>Sales</p></div>
            <div>
                <p className='font-roboto text-3xl text-[#555555] pt-0'>10</p>
                <div className='pt-2'>
                    <p className='font-roboto text-1xl text-[#555555] underline pt-0'><Link to='/#'>View</Link></p>
                </div>
            </div>
        </div>
        
        <div>
            <div>
                <p className='font-roboto text-base pt-7'>Add a book for Sale</p>
            </div>
            <div className='pt-2'>
            <Button
            className="bg-[#BF5A36] text-white mt-3 font-bold px-6"
            type="submit"
            >
            Add
            </Button>
            </div>
        </div>
    </div>

  )
}

export default Complaints_author;