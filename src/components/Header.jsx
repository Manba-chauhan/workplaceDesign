import React from 'react';

const Header = () => {
  return (
    <div className="max-w-full mx-auto">
      <div className="flex justify-evenly  items-center p-4 
      shadow-md max-md:justify-between max-md:items-start max-md:px-8">
        <div className="menu max-md:hidden">
          <ul className="menu-list">
            <li className="list">Home</li>
            <li className="list">About</li>
            <li className="list">Service</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-black font-bold text-2xl">1-Space</h1>
        </div>
        <div className="menu max-md:hidden">
          <ul className="menu-list text-md">
            <li className="list">Services</li>
            <li className="list">Space</li>
            <li className="list">Event</li>
          </ul>
        </div>
        <div className="md:hidden">
          <span className="text-3xl text-black">
            <i class="fa-solid fa-bars"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
