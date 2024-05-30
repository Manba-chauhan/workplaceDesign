import React from 'react';
import photo3 from '../assets/img/photo3.png'

const Section7 = () => {
  return (
    <div className="max-w-[1163px] mx-auto ">
      <div className="flex justify-center max-md:flex-col max-md:items-center max-md:p-10">
        <div className="flex-1 ">
          <h2 className="text-orange-500 font-medium text-md mb-4 ">
            Become A Member
          </h2>
          <h2 className="text-4xl font-meduim  text-black tracking-widest leading-8 mb-4 max-md:text-xl">
            Ready to try different work environment now?
          </h2>
          <p className="text-black tracking-wider  leading-6 text-sm">
            Coworking is an arrangement in which workers of different companies
            share an office space, allowing cost savings and convenience through
            the use of common infrastructures, such as equipment, utilities, and
            receptionist and custodial services, and in some cases refreshments
            and parcel acceptance services.
          </p>
          <div className="flex space-x-10 max-sm:flex-col max-sm:space-x-0">
            <button className="bg-orange-500 text-white px-8 py-2 text-nowrap rounded-xl text-md  
            mt-20 max-md:mt-10 ">
              Sign Up Now
            </button>
            <button
              className="border-orange-500 border-dotted border-2
               text-orange-500 px-8 py-2 rounded-xl text-md  mt-20 text-nowrap max-md:mt-5
            "
            >
              Schedule Visit
            </button>
          </div>
        </div>
        <div className="flex-1  ">
          <div className="max-w-[440px] max-h-[576px] object-cover ml-40  max-md:ml-0 max-md:mt-10">
            <img
              src={photo3}
              alt=""
              className="border-orange-500 border-t-4 rounded-t-full border-l-4 pl-10 pt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
