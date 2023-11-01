import React from 'react'
import { Link } from 'react-router-dom'

function Profile_navbar() {
  return (
    <div>
      <div className="font-roboto text-xl text-[#BF5A36] font-semibold block md:w-[1400px] md:flex">
        <div className=" my-1 mx-0 min-w-[250px] hover:border-r-2 hover:border-b-2 hover:border-t-2 hover:border-b-transparent transition-all duration-100 rounded-tr-lg px-4 py-2 border-b-2 border-t-2 border-t-transparent hover:border-t-[#BF5A36] border-[#BF5A36]">
          <Link to="./" className="">
            Dashboard
          </Link>
        </div>
        <div className=" my-1 mx-0 min-w-[250px] hover:border-r-2 hover:border-b-2 hover:border-l-2 hover:border-t-2 hover:border-b-transparent transition-all duration-100 rounded-t-lg px-4 border-t-2 border-t-transparent hover:border-t-[#BF5A36] py-2 border-b-2 border-[#BF5A36]">
          <Link to="./" className="">
            Favourites
          </Link>
        </div>
        <div className=" my-1 mx-0 min-w-[250px] hover:border-r-2 hover:border-b-2 hover:border-l-2 hover:border-t-2 hover:border-b-transparent transition-all duration-100 rounded-t-lg px-4 border-t-2 border-t-transparent hover:border-t-[#BF5A36] py-2 border-b-2 border-[#BF5A36]">
          <Link to="./" className="">
            Settings
          </Link>
        </div>
        <div className=" my-1 mx-0 min-w-[250px] hover:border-b-2 hover:border-l-2 hover:border-t-2 hover:border-b-transparent transition-all duration-100 rounded-tl-lg px-4 py-2 border-b-2 border-t-2 border-t-transparent hover:border-t-[#BF5A36] border-[#BF5A36]">
          <Link to="./" className="">
            Purchase History
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile_navbar