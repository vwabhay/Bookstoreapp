import React from 'react';
import bannerImage from '../assets/banner.jpg';  // Import the image here
import Navbar from './Navbar';

function BannerComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-red-500">
      {/* Main Container */}
      <div className="bg-white flex-grow">
        {/* Navbar */}
        <Navbar />

        {/* Banner Section */}
        <div className="flex flex-col md:flex-row items-center mt-8 px-4 md:px-20">

          {/* Left Section (Text) */}
          <div className="text-center md:text-left mb-4 md:mb-0 md:w-1/2">
            <label style={{ fontSize: "35px" }}>
              Hello, welcome here to learn something{' '}<br />
              <span className="text-yellow-500">new everyday !!</span>.
            </label>
          </div>

          {/* Right Section (Image) */}
          <div className="w-5 md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img
              src={bannerImage}
              alt="Banner"
              style={{marginLeft:"-50%",width:"40%",height:"40%"}}
            />
          </div>

        </div>

        {/* Email Input Section */}
        <div style={{marginLeft:"-65%"}} className="flex justify-center mt-8 px-4">
          <label className="input input-bordered flex items-center gap-2 w-full max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5-1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Enter your email" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
