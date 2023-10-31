import React from 'react'
import { FiSearch } from "react-icons/fi";
import { useState } from 'react';

function Transactions_table() {
   
      return (
      
    <>
    <div className="flex justify-center mt-9">
      <div className="md:flex md:justify-between items-center space-x-2 mx-auto w-3/5 max-w-[1400px]">
        {/* Search Bar */}
        <div className="relative w-full mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="border shadow rounded-lg w-full py-2 pr-10 pl-3 focus:outline-none focus:to-black border-[#BF5A36] bg-white font-semibold"
          />
          <div className="absolute top-0 right-0 px-5 h-full flex items-center bg-[#BF5A36] rounded-md">
            <FiSearch className="text-[#ffffff]" />
          </div>
        </div>

        {/* Select Tags */}
        <div className="my-3 justify-center flex gap-2">
          

          <select className="border-none outline-none rounded-lg py-2 px-3 text-[#BF5A36] bg-transparent font-semibold">
            <option value="type" selected disabled>
              Type
            </option>
            <option value="type">Selling</option>
            <option value="type">Bidding</option>
            <option value="type">Exchange</option>
          </select>
        </div>
      </div>
    </div>
<div className="relative overflow-x-auto w-4/5 float-right">
    <table className="w-full text-sm text-left text-gray-500">
       
        <tbody>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-[#4F6D7A] whitespace-nowrap">
                   12/10/2023  Transaction1 -Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </th>
                
               
            </tr>
            <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-[#4F6D7A] whitespace-nowrap">
                12/10/2023  Transaction2-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </th>
               
            </tr>
          
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-[#4F6D7A] whitespace-nowrap">
                12/10/2023  Transaction3-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </th>
               
            </tr>
            <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-[#4F6D7A] whitespace-nowrap">
                12/10/2023  Transaction4-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </th>
               
            </tr>
            <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-[#4F6D7A] whitespace-nowrap">
                12/10/2023  Transaction5-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </th>
               
            </tr>
          
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-[#4F6D7A] whitespace-nowrap">
                12/10/2023  Transaction6-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </th>
               
            </tr>
            <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-[#4F6D7A] whitespace-nowrap">
                12/10/2023  Transaction7-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </th>
               
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-[#4F6D7A] whitespace-nowrap">
                12/10/2023  Transaction8-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </th>
               
            </tr>
            <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-[#4F6D7A] whitespace-nowrap">
                12/10/2023      Transaction9-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </th>
               
            </tr>
           
        </tbody>
    </table>
</div>

  </>
  )
}

export default Transactions_table;