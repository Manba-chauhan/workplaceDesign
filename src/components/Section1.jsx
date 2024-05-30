import React from 'react';
import bigimg1 from '../assets/img/bigimg1.png'
import circle1 from '../assets/img/circle1.png'
import circle2 from "../assets/img/circle2.png";
import circle3 from "../assets/img/circle3.png";
import Button from './Button';
import profile  from '../assets/img/profile.png'
import Logo from './Logo';


const Section1 = () => {
  return (
    <div className="max-w-full my-20">
      <div className=" ">
        <div className="max-w-[503px] max-h-[764px] float-right max-md:float-none  ">
          <img
            src={bigimg1}
            alt="img"
            className="max-w-[473px] max-h-[690px] object-cover absolute right-60 rounded-t-full   border-t-4 border-l-4
            border-purple-400 border-spacing-10 p-4  
            max-md:right-0 max-md:w-[350px] max-md:left-10"
          />
          <img
            src={circle1}
            alt="inmg"
            className="relative  -left-12  -top-10 max-md:-left-12 "
          />
          <img
            src={circle2}
            alt="inmg"
            className="relative  left-32 -top-60  -right-20 max-md:left-52 max-md:-top-80 
            "
          />

          <img
            src={circle3}
            alt="inmg"
            className="relative -top-96 left-16  max-md:left-32 max-md:-top-[400px]"
          />
          <h1
            className="text-gray-500 opacity-30 text-4xl tracking-wide 
          font-bold relative -top-80  -rotate-90 -translate-y-52 
          -translate-x-8  max-md:hidden"
          >
            Co Working
          </h1>
        </div>
        <div className="relative top-20  max-md:-top-60 ">
          <div className="ml-40 pt-20  max-md:pl-10 max-md:pt-10 max-md:ml-5 max-sm:ml-0">
            <span className="text-orange-500 text-3xl font-bold">^^^^^</span>
            <h1 className="text-black text-5xl font-bold w-4/12 max-md:text-3xl max-sm:text-lg 
            tracking-wider max-md:w-full">
              A new way to revolutionise your workspace to yourself
            </h1>
          </div>
          <div
            className="flex justify-between items-center px-8 py-6 ml-40 bg-[#F3F3F3] 
        bg-opacity-60   bg-clip-border rounded-xl mt-10
        max-md:flex-col max-md:px-2 max-md:ml-5 max-md:space-y-6  "
          >
            <div className="">
              <span className="text-2xl text-gray-500 max-sm:text-xl">
                <i class="fa-solid fa-location-dot"></i> &nbsp;City
              </span>
            </div>
            <div className="">
              <span className="text-2xl text-gray-500 max-md:text-xl">location</span>
            </div>
            <div className="">
              <Button text="Schedule Visit" />
            </div>
          </div>
          <div className="ml-40 flex items-center mt-7 max-md:ml-0 max-md:flex-col">
            <div className="">
                <img src={profile} alt=""/>
            </div>
            <div className="">
              <p className='text-sm font-normal'>16 people booked a visit in last 24 hours</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Section1;
