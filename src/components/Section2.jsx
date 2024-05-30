import React from 'react';
import Button from './Button';
import big2 from '../assets/img/big2.png'

const Section2 = () => {
  return (
    <div className="w-full mt-20 ml-40 max-md:ml-2">
      <div className="flex  justify-center items-center space-x-40 max-md:flex-col max-md:space-x-0 max-md:px-20 ">
        <div className="">
          <img src={big2} alt=""  className='w-full h-full object-cover border-t-4 rounded-t-full p-3 border-orange-500 '/>
        </div>
        <div className="">
          <div className="py-6">
            <p className="py-2 text-orange-600">Services</p>
            <h1 className="text-4xl text-black font-bold tracking-widest w-5/12 max-md:w-full">
              Solutions designed for all your needs
            </h1>
            <p className="w-1/2 text-sm py-4 max-md:w-full">
              Coworking is an arrangement in which workers of different
              companies share an office space, allowing cost savings and
              convenience through the use of common infrastructures, such as
              equipment, utilities, and receptionist and custodial services, and
              in some cases refreshments and parcel acceptance services.
            </p>
          </div>
          <div className="flex items-center space-x-20  max-md:text-nowrap max-sm:flex-col max-sm:space-x-0 max-sm:space-y-6">
            <button className="bg-orange-500 text-white px-8 py-2 rounded-xl text-xl  ">
              View Availability
            </button>
            <div className="flex items-center space-x-5">
              <span className="px-4 py-2 border-2 rounded-full  text-orange-500 border-orange-500">
                <i class="fa-solid fa-play"></i>
              </span>
              <p className="text-orange-500">3D Tour of Space</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
