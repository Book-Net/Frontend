import React from 'react'
import Barchart from './Barchart';
import Sales_linechart from './Sales_linechart';
import Bid_linechart from './Bid_linechart';
import Button from "./Button";

function Dashboard_admin() {
  return (
    <div className='p-0 h-[auto]'>

      <div className='grid grid-cols-4 gap-4'>
         <div className='col-span-1 border-2 border-[#F1E6D9] bg-[#F2CB9E] h-2/5 mt-3 p-4 justify-center font-roboto'>
              <p className='text-[#BF5A36]  text-3xl font-bold pr-5'>Transactions</p>
              <p>(For this month)</p>
              <p className='text-[#555555]  text-2xl pl-5'>2000</p>   
         </div>

         <div className='col-span-3'>
           <Barchart />
         </div>
      </div>
        
      <div className='grid grid-cols-2 gap-4'>

          <div className='col-span-1'>
            <div className='border-2 my-8 mr-5 border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-left font-roboto'>
              <p className='text-[#BF5A36]  text-3xl font-bold pr-5'>Sales Transactions</p>
              <p>(For this month)</p>
              <p className='text-[#555555]  text-2xl pl-5'>400</p>   
            </div>  

            <div>
                <Sales_linechart />
            </div>
          </div>

          <div className='col-span-1'>
            <div className='border-2 my-8 mr-5 border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-right font-roboto'>
              <p className='text-[#BF5A36]  text-3xl font-bold pr-5'>Bid Transactions</p>
              <p>(For this month)</p>
              <p className='text-[#555555]  text-2xl pl-5'>100</p>   
            </div>
            
            <div>
                <Bid_linechart />
            </div>
          </div>
         
      </div>

      <div className='grid grid-cols-4 gap-4'>
         <div className='col-span-2 border-2 my-8 mr-5 border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-center font-roboto'>
              <p className='text-[#BF5A36]  text-3xl font-bold pr-5'>Swap Transactions</p>
              <p>(For this month)</p>
              <p className='text-[#555555]  text-2xl pl-5'>1000</p>   
         </div>

         <div className='col-span-2 border-2 my-8 mr-5 border-[#F1E6D9] bg-[#F2CB9E] h-[auto] p-4 justify-center font-roboto'>
              <p className='text-[#BF5A36]  text-3xl font-bold pr-5'>Donate Transactions</p>
              <p>(For this month)</p>
              <p className='text-[#555555]  text-2xl pl-5'>500</p>   
         </div>
      </div> 

    </div>

  )
}

export default Dashboard_admin;