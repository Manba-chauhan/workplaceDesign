import React from 'react';
import photo from '../assets/img/photo.png'
import photo2 from "../assets/img/photo2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const Section4 = () => {
  return (
    <div className="max-w-full  mt-20 ">
      <div className="flex justify-center items-center max-lg:flex-col">
        <div className="flex-1 ml-20 max-md:mx-5">
          <p className="text-orange-500 font-bold tracking-widest pl-2">SOLUTIONS</p>
          <h2 className="text-black font-semibold tracking-widest text-4xl max-sm:text-2xl">
            The 1-space all view experience technology
          </h2>
          <p className=" my-4  tracking-normal leading-8 text-black">
            Coworking is an arrangement in which workers of different companies
            share an office space, allowing cost savings and convenience through
            the use of common infrastructures, such as equipment, utilities, and
            receptionist and custodial services, and in some cases refreshments
            and parcel acceptance services.
          </p>
          <button className="bg-orange-500 text-white px-8 py-2 rounded-xl text-md  mt-20 ">
            View Availability
          </button>
        </div>
        <div className=" flex space-x-4 mt-40 ml-20 max-md:mx-5">
          <div className="max-w-[532px] max-h-[710px] object-cover">
            <img src={photo} alt="w-full h-full object cover" />
          </div>
          <div className="max-w-[532px] max-h-[710px] object-cover">
            <img src={photo2} alt="w-full h-full object cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
