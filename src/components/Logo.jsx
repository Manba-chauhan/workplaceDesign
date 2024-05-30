import React from 'react';
import google from '../assets/img/google.png'
import slack from "../assets/img/slack.png";
import atlassian from "../assets/img/atlassian.png";
import dropbox from "../assets/img/dropbox.png";
import shopify from "../assets/img/shopify.png";


const Logo = () => {
  return (
    <div className="mt-40 ml-96 max-md:ml-40 max-md:-mt-60">
      <div className="grid grid-cols-5 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div className="">
          <img src={google} alt="googlr" />
        </div>
        <div className="">
          <img src={slack} alt="googlr" />
        </div>
        <div className="">
          <img src={atlassian} alt="googlr" />
        </div>
        <div className="">
          <img src={dropbox} alt="googlr" />
        </div>
        <div className="">
          <img src={shopify} alt="googlr" />
        </div>
      </div>
    </div>
  );
}

export default Logo;
