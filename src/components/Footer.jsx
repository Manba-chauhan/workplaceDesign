import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-20 py-4">
      <div className="flex justify-between max-md:flex-col max-md:justify-center max-md:space-y-10 ">
        <div className="flex-1 max-md:ml-10 ">
          <h1 className="text-lg font-bold tracking-widest">1-Space</h1>
          <p className="text-gray-500 tracking wide text-sm ">
            Men cannot not live by exchanging articles, but producing them. They
            live by work not trade.
          </p>
        </div>
        <div className="flex-1 ml-10 ">
          <h1 className="text-orange-500 font-bold text-lg">Company</h1>
          <ul className="mt-4">
            <li className="text-gray-500 font-normal text-sm pb-1">
              Global Localities
            </li>
            <li className="text-gray-500 font-normal text-sm pb-1">Missions</li>
            <li className="text-gray-500 font-normal text-sm pb-1">Careers</li>
            <li className="text-gray-500 font-normal text-sm pb-1">
              Investors
            </li>
            <li className="text-gray-500 font-normal text-sm pb-1">Newsroom</li>
          </ul>
        </div>
        <div className="flex-1  max-md:ml-10">
          <h1 className="text-orange-500 font-bold text-lg">Company</h1>
          <ul className=" mt-4">
            <li className="text-gray-500 font-normal text-sm pb-1">Tasks</li>
            <li className="text-gray-500 font-normal text-sm pb-1">Profile</li>
            <li className="text-gray-500 font-normal text-sm pb-1">Events</li>
            <li className="text-gray-500 font-normal text-sm">Services</li>
          </ul>
        </div>
        <div className=" max-md:ml-10">
          <h1 className="text-orange-500 font-bold text-lg">Follows</h1>
          <ul className="flex space-x-5 mt-4 ">
            <li className=" font-normal text-sm text-orange-600">
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li className=" font-normal text-sm text-orange-600">
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li className=" font-normal text-sm text-orange-600">
              <i class="fa-solid fa-globe"></i>
            </li>
            <li className=" font-normal text-sm text-orange-600">
              <i class="fa-brands fa-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
