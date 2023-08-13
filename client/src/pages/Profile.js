import React from 'react';
import Cover_pic from '../assets/Cover_pic.jpg';
import profile_pic from '../assets/image1.png';

function Profile() {
  return (
    <div>
      <div className=''>

      <div className='w-screen h-[200px] md:px-[100px] max-h-[300px] '>
          <img className='w-screen max-h-[20res] w-screen h-[150px]' src={Cover_pic}></img>
          <img className='rounded-full border border-gray-100 shadow-sm w-[150px] h-[150px]' src={profile_pic}></img>
      </div>
      </div> 


    </div>
  )
}

export default Profile