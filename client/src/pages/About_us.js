import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imageAU from "../assets/auImage.png";
import vision from "../assets/vision.png";
import aboutimage from "../assets/aboutImage.jpg";
import mission from "../assets/mission.png"



function About_us() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 5000, // Set the time interval for image change (5 seconds)
      };
    return (
        <div>
            <p className="topics text-[#BF5A36] text-2xl text-center font-bold mb-6 static">About Us</p>
            <div className="author-profile-container max-w-6xl mx-auto p-8 bg-[#f5f5f5] relative overflow-hidden rounded-lg">
                <div class="grid grid-cols-2 my-14 align-middle">
                    <div>
                        <p className='text-[#4F6D7A] text-2xl text-center font-bold mb-6 position:fixed'>Welcome to BookNet! </p>
                        <p className='text-[#4F6D7A]  text-[18px] font-normal font-roboto text-left '>Where Books Find New Adventures!

                            At BookNet, we are passionate about the power of books and the knowledge, stories, and connections they bring to our lives. Our platform was born out of a shared love for reading and a desire to create a community that makes it easy for book enthusiasts to share, exchange, sell, or bid on their favorite literary treasures.</p>
                    </div>
                    <img
                        className="h-[300px] ml-[20%] px-5 justify-items-end"
                        src={imageAU}
                        alt=""
                    />


                </div>

                <div class="grid grid-cols-2 gap-4 my-14 align-middle">
                    <img
                        className="h-[300px] px-5 mx-6 md:flex"
                        src={vision}
                        alt=""
                    />
                    <div>
                        <p className="topics text-[#4F6D7A] text-2xl text-center font-bold mb-6 position:fixed">Our Vision</p>
                        <p className='text-[#4F6D7A]  mt-6 text-[18px] font-normal font-roboto text-left '>We envision a future where BookNet becomes the ultimate destination for book enthusiasts, providing a dynamic space where books are not just read but shared, cherished, and enjoyed by an ever-growing community of passionate readers</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 my-14 align-middle">
                    <div>
                        <p className='text-[#4F6D7A] text-2xl text-center font-bold mb-6 position:fixed'>Our Mission </p>
                        <p className='text-[#4F6D7A]  text-[18px] font-normal font-roboto text-left '>Our mission is simple yet powerful: to connect book lovers from all walks of life and make the world of books more accessible and enjoyable. We believe in the transformative power of books and the joy of sharing your literary adventures with others. Whether you have a book you'd like to trade, sell, or auction, or if you're searching for a rare edition to add to your collection, BookNet is your hub for all things book-related.</p>
                    </div>
                    <img
                        className="h-[300px] ml-[20%] px-5 justify-items-end"
                        src={mission}
                        alt=""
                    />


                </div>
                
                <div class="grid grid-cols-3 my-10 align-middle bg-[#F5f5f5]">
                <Slider {...settings}>
                    <div className='col-span-2'><img
                        className="h-[600px] px-5 mx-6 md:flex  rounded-lg'>"
                        src={aboutimage}
                        alt=""
                    />
                    </div>
                    <div className='col-span-2'><img
                        className="h-[600px] px-5 mx-6 md:flex  rounded-lg'>"
                        src={mission}
                        alt=""
                    />
                     
                    </div>
                    </Slider>
                    <div className='col-span-2'>
                    
                    </div>
                   
                </div>


            </div>
        </div>
    )
}

export default About_us