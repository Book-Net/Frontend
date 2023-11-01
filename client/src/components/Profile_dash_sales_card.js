import React from 'react'
import { Link } from 'react-router-dom'
import Button from "./Button";

function Profile_dash_sales_card() {
  return (
  
        <div className='bg-[#F2CB9E] w-[180px] pb-4 border-2 border-[#F1E6D9]'>
            <div className='flex justify-start'><p className='font-roboto text-2xl text-[#BF5A36] font-bold pl-3 pt-4 pb-0 '>Sales</p></div>
            <div>
                <p className='font-roboto text-3xl text-[#555555] pt-0'>10</p>
                <div className='pt-2'>
                    <p className='font-roboto text-1xl text-[#555555] underline pt-0'><Link to='/#'>View</Link></p>
                </div>
            </div>
        </div>

  )
}

export default Profile_dash_sales_card;