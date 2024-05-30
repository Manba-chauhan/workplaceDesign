import React from 'react';
import Card from './Card';
import event from '../assets/img/event.png'
import wifi from "../assets/img/wifi.png";
import dumbbell from "../assets/img/dumbbell.png";
import internet from "../assets/img/internet.png";
import armchair from "../assets/img/armchair.png";

const Section5 = () => {
  return (
    <div className="mt-20 p-4">
      <div className="text-center">
        <h2 className="text-orange-500 font-medium text-md">Why Choose Us?</h2>
        <p
          className="text-black  my-4 font-meduim text-4xl w-4/12 
        mx-auto tracking-wider  leading-10 max-md:w-full  max-sm:text-4xl"
        >
          The benefits that will make you comfort
        </p>
      </div>
      <div className="grid grid-cols-5 gap-0 align-middle max-md:grid-cols-2 max-sm:grid-cols-1 ">
        <div className="">
          <Card
            img={event}
            heading="Community Events"
            text="Allowing cost savings and convenience through the use of common infrastructures."
          />
        </div>
        <div className="">
          <Card
            img={dumbbell}
            heading="Exercise Facilities"
            text="Allowing cost savings and convenience through the use of common infrastructures."
          />
        </div>
        <div className="">
          <Card
            img={wifi}
            heading="High-Speed Wireless"
            text="Allowing cost savings and convenience through the use of common infrastructures."
          />
        </div>
        <div className="">
          <Card
            img={internet}
            heading="Global Availability"
            text="Allowing cost savings and convenience through the use of common infrastructures."
          />
        </div>
        <div className="">
          <Card
            img={armchair}
            heading="Comfort Lounges"
            text="Allowing cost savings and convenience through the use of common infrastructures."
          />
        </div>
      </div>
    </div>
  );
}

export default Section5;
