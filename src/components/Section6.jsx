import React from 'react';
import g1 from '../assets/img/g1.png'
import g2 from '../assets/img/g2.png'
import g3 from '../assets/img/g3.png'
import g4 from '../assets/img/g4.png'
import g5 from '../assets/img/g5.png'

const Section6 = () => {
  return (
    <div className="max-w-[1195px] mx-auto p-20 max-md:p-5">
      <div className="flex justify-center max-md:flex-col max-md:items-center ">
        <div className="flex-1">
          <div className="">
            <p className="text-orange-500 text-sm tracking-widest">Gallery</p>
            <h1 className="text-black tracking-widest text-4xl font-bold  max-md:w-full max-md:text-2xl">
              Immersive beautiful co-working space gallery
            </h1>
          </div>
          <div className=" mt-10  grid  grid-cols-2 px-2">
            <div className="">
              <img src={g4} alt="" />
            </div>
            <div className="">
              <img src={g5} alt="" className="" />
            </div>
            <div className="">
              <img src={g3} alt="" />
            </div>
            <div className="">
              <img src={g2} alt="" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={g1} alt="mm" />
        </div>
      </div>
    </div>
  );
}

export default Section6;
