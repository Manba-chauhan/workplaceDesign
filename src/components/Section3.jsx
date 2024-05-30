import React from 'react';
import big3 from '../assets/img/big3.png'
import big7 from '../assets/img/big7.png'
import big5 from "../assets/img/big5.png";
import big6 from "../assets/img/big6.png";

import Button from './Button';

const Section3 = () => {
  return (
    <div
      className="flex max-w-[2400px] mx-auto mt-40 justify-center items-center 
    ml-40 max-lg:ml-20 max-lg:flex-col m"
    >
      <div className=" flex-1">
        <div className="">
          <p className="text-orange-500 font-bold">Visions</p>
          <h2 className="text-black font-medium text-4xl w-10/12 tracking-widest max-md:w-full">
            Our vision in 1-space to make something
          </h2>
          <p className=" my-6 text-md tracking-wider line-clamp-6 leading-8 max-md:w-full">
            Coworking is an arrangement in which workers of different companies
            share an office space, allowing cost savings and convenience through
            the use of common infrastructures services.
          </p>
        </div>
        <div className="grid grid-cols-2  gap-10">
          <div className="">
            <div className="flex">
              <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
              <i class="fa-regular fa-building relative -left-4  -top-3 text-xl"></i>
              <h2 className="text-black font-medium  relative -top-2">
                High quality co-living spaces
              </h2>
            </div>
            <div className="px-6">
              <p className="text-sm max-md:w-full">
                Coworking is an arrangement in which workers of different
                companies.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex">
              <span className="w-4 h-4 rounded-full bg-green-400"></span>
              <i class="fa-solid fa-kit-medical relative -left-4  -top-3 text-xl"></i>
              <h2 className="text-black font-medium  relative -top-2">
                High quality co-living spaces
              </h2>
            </div>
            <div className="px-4">
              <p className="text-sm ">
                Coworking is an arrangement in which workers of different
                companies.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex">
              <span className="w-4 h-4 rounded-full bg-blue-400"></span>
              <i class="fa-regular fa-building relative -left-4  -top-3 text-xl"></i>
              <h2 className="text-black font-medium  relative -top-2">
                High quality co-living spaces
              </h2>
            </div>
            <div className="px-4">
              <p className=" text-sm max-md:w-full">
                Coworking is an arrangement in which workers of different
                companies.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button className="bg-orange-500 text-white px-8 py-2 rounded-xl text-md  ">
            Explore more
          </button>
        </div>
      </div>
      <div className=" flex-1 max-lg:-ml-60 max-md:-ml-80">
        <div className="">
          <img src={big7} alt="" className="relative top-16 left-10 z-50" />
        </div>
        <div className="absolute">
          <span className="bg-yellow-100 border-2 rounded-t-full p-52  max-md:p-40"></span>
          <img src={big3} alt="" className="relative top-20  max-md:w-[300px] max-md:left-5" />
        </div>

        <div className="relative">
          <img src={big5} alt="" className="relative -top-72 left-72 " />
        </div>
        <div className="relative">
          <img src={big6} alt="" className="relative  -top-40 left-72 max-md:left-60" />
        </div>
        {/* <div className="relative">
          <img src={big7} alt="" className="relative -top-40 left-80" />
        </div> */}
      </div>
    </div>
  );
}

export default Section3;
