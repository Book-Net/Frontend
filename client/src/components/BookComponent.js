import React from 'react';

const BookComponent = () => {
  return (
    <div className="body font-poppins bg-gray-300 h-screen flex items-center justify-center">
      <div className="book w-350 h-450 relative transition duration-1000 perspective-1500">
        <input type="checkbox" id="checkbox-cover" className="hidden" />
        <input type="checkbox" id="checkbox-page1" className="hidden" />
        <input type="checkbox" id="checkbox-page2" className="hidden" />
        <input type="checkbox" id="checkbox-page3" className="hidden" />
        <div className="cover bg-yellow-300 w-full h-full rounded-r-lg flex items-center justify-center transition-transform origin-center-left">
          <label htmlFor="checkbox-cover"></label>
        </div>
        <div className="page absolute bg-white w-330 h-430 rounded-r-lg transform-origin-left transform-style-preserve-3d transform rotate-y-0 transition duration-1500">
          {/* Page 1 */}
          <div className="front-page absolute w-full h-full backface-hidden box-border p-4">
            <p>
              abcdefghijklmn
            </p>
            <label
              className="next absolute bottom-4 right-4 cursor-pointer"
              htmlFor="checkbox-page1"
            >
              <i className="fas fa-chevron-right"></i>
            </label>
          </div>
          <div className="back-page absolute w-full h-full transform rotate-y-180 backface-hidden z-99">
            <img src="1.jpg" alt="Page 1" />
            <label
              className="prev absolute bottom-4 left-4 cursor-pointer"
              htmlFor="checkbox-page1"
            >
              <i className="fas fa-chevron-left"></i>
            </label>
          </div>
          {/* Page 2 */}
          <div className="front-page absolute w-full h-full backface-hidden box-border p-4">
            <h2>Page 2</h2>
            <p>
              Lorem 
            </p>
            <label
              className="next absolute bottom-4 right-4 cursor-pointer"
              htmlFor="checkbox-page2"
            >
              <i className="fas fa-chevron-right"></i>
            </label>
          </div>
          <div className="back-page absolute w-full h-full transform rotate-y-180 backface-hidden z-99">
            <img src="2.jpg" alt="Page 2" />
            <label
              className="prev absolute bottom-4 left-4 cursor-pointer"
              htmlFor="checkbox-page2"
            >
              <i className="fas fa-chevron-left"></i>
            </label>
          </div>
          {/* Page 3 */}
          <div className="front-page absolute w-full h-full backface-hidden box-border p-4">
            <h2>Page 3</h2>
            <p>
               recusandae ab!
            </p>
          </div>
        </div>
        <div className="back-cover bg-yellow-300 w-full h-full"></div>
      </div>
    </div>
  );
};

export default BookComponent;
