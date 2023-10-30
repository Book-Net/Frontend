import React from 'react'
import { Link } from 'react-router-dom'
import Button from "./Button";

function Transactions_admin() {
  return (
    <div className='p-0 w-1/4 h-[auto] '>

         <div className='border-2 border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-center font-roboto'>
              <p className='text-[#BF5A36]  text-3xl font-bold pr-5'>Transactions</p>
              <p>(For this month)</p>
              <p className='text-[#555555]  text-2xl pl-5'>2000</p>   
         </div>

         <div className='border-2 my-8 border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-center font-roboto'>
              <p className='text-[#BF5A36]  text-3xl font-bold pr-5'>Sales Transactions</p>
              <p>(For this month)</p>
              <p className='text-[#555555]  text-2xl pl-5'>400</p>   
         </div>

         <div className='border-2 my-8 border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-center font-roboto'>
              <p className='text-[#BF5A36]  text-3xl font-bold pr-5'>Bid Transactions</p>
              <p>(For this month)</p>
              <p className='text-[#555555]  text-2xl pl-5'>100</p>   
         </div>

         <div className='border-2 my-8 border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-center font-roboto'>
              <p className='text-[#BF5A36]  text-3xl font-bold pr-5'>Swap Transactions</p>
              <p>(For this month)</p>
              <p className='text-[#555555]  text-2xl pl-5'>1000</p>   
         </div>

         <div className='border-2 my-8 border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-center font-roboto'>
              <p className='text-[#BF5A36]  text-3xl font-bold pr-5'>Donate Transactions</p>
              <p>(For this month)</p>
              <p className='text-[#555555]  text-2xl pl-5'>500</p>   
         </div>
        
    </div>

  )
}

export default Transactions_admin;