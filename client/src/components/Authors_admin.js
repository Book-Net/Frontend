import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from "./Button";

function Authors_admin() {

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const Popup = () => {
    setIsPopupVisible(!isPopupVisible);
  }; 

  return (
    <div >
        <div className='border-2 border-[#F1E6D9] bg-[#F2CB9E] w-4/5 h-[auto] p-4 justify-center'>
          <div className='font-roboto text-3xl flex justify-center'>
              <p className='text-[#BF5A36] font-bold pr-5'>Authors</p>
              <p className='text-[#555555] pl-5'>1000</p>
          </div>        
        </div>
        
        <div>
            <div>
                <p className='font-roboto text-2xl text-center text-[#555555] w-4/5 m-7 mr-20 justify-center'>New Requests</p>
            </div>
            <div className="w-4/5 bg-gray-200 my-6 justify-center items-center h-auto grid grid-cols-4 gap-4 rounded-md shadow-md">
              <label class="col-span-3 p-5 text-xl text-left self-center">Author1</label>
              <Button
              className="bg-[#BF5A36] col-span-1 text-white mt-1 w-2/5 font-bold mr-1 p-0"
              type="button"  onClick={Popup}
              >
              View
              </Button>
            </div>

            <div className="w-4/5 bg-gray-200 my-6 justify-center items-center h-auto grid grid-cols-4 gap-4 rounded-md shadow-md">
              <label class="col-span-3 p-5 text-xl text-left self-center">Author2</label>
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
                  <label class="p-5 font-bold text-left text-gray-800 self-center">Author 1</label>
                  <form >
                     <table class="mt-5 text-left">
                       <tr>
                         <th>Books -</th>
                       </tr>
                       <tr>
                         <td>Book1</td>
                         <td>ISBN - 123ABCD</td>
                       </tr>
                       <tr>
                          <th>Email</th>
                          <td class="px-5">Author1@gmail.com</td>
                       </tr>
                       <tr>
                         <th>Telephone</th>
                         <td class="px-5">0775642345</td>
                       </tr>
                       <tr>
                         <th>Address</th>
                         <td class="px-5">23,Temple road, mawanella</td>
                       </tr>
                       
                     </table>
                     <Button
                       className="bg-[#BF5A36] col-span-1 text-white mt-4 w-2/5 font-bold mr-1 p-0"
                       type="submit" onClick={Popup}
                       >
                       Accept
                     </Button>
                  </form>
                  <Button className="text-[#BF5A36]"onClick={Popup}>Close</Button>
                </div>
              </div>
            )}

        </div>
    </div>

  )
}

export default Authors_admin;