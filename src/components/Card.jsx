import React from 'react';

const Card = (props) => {
  return (
    <div className='max-w-[216px] max-h-[200px] mx-auto flex flex-col mt-10  justify-center items-center'>
      <div className='text-center'>
          <img src={props.img} alt="img" />
      </div>
      <div className='text-center'>
        <h2 className='mt-4 font-semibold  text-sm tracking-wider leading-8'>{props.heading}</h2>
        <p className='text-[12px] mt-2 tracking-wider leading-6'>{props.text}</p>
      </div>
      
    </div>
  );
}

export default Card;
