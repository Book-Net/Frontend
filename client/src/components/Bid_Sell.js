import React from 'react'
import Button from './Button'
import Heart from './Heart'

function Bid_Sell() {
  return (
    <>
      <div className='grid grid-rows-4 gap-3 mt-[100px] bg-[#FFFFFF] relative mx-auto w-[600px] font-roboto justify-center'>
        <div className='grid grid-cols-[200px,60px,200px] gap-x-[5px] justify-center'>
            <div className='md:w-[200px] h-[200px]  bg-slate-600'>Image</div>
            <div className='md:w-[60px] h-[200px]' ><Heart/></div>
            <div className='md:w-[200px] h-[200px]  grid grid-rows-2 gap-4 items-center'>
                <div class="bg-[#F5F5F5] p-4 grid grid-rows-2">
                <div className='flex items-center'><p className='mx-3 font-bold text-[#4F6D7A]'>Book Name</p></div>
            <div className='flex items-center'><p className='mx-3  text-[#4F6D7A]'>Author</p></div>
                </div>
                <div className='flex flex-col items-center justify-center p-1 bg-[#F5F5F5]  rounded-[15px] shadow-md'>
                    <p>Price</p>
                    <Button className={"bg-[#BF5A36] text-[#FFFFFF]"}>Buy Now</Button>
                </div>
            </div>
        </div>
        <div className='grid grid-rows-2 bg-[#F5F5F5] w-7/8 relative'>
            <div className='flex items-center'><p className='mx-3 font-bold text-[#BF5A36]'>Condition</p></div>
            <div className='flex items-center'><p className='mx-3 font-bold text-[#BF5A36]'>Description</p></div>
        </div>
        <div>
            <Button className={"text-[#BF5A36] bg-[#F5F5F5] font-semibold border border-[#BF5A36] shadow-inner"}>Ask a question</Button>
        </div>
        <div className='grid grid-rows-[36px, 160px] gap-1 bg-[#F5F5F5] w-7/8 relative rounded-lg'> 
          <div> <p className='m-5 text-[#BF5A36] font-semibold h-[36px]'>Description</p> </div>
          <div className='grid grid-cols-3 bg-gray-800 h-[160px]'>
            <div>1</div>
            <div className='grid grid-rows-2 '>
            </div>
            <div>3</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bid_Sell
