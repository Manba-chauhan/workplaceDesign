import React from 'react';

const Button = (props) => {
  return (
    <button className="bg-orange-500 text-white px-8 py-5 rounded-xl text-2xl  ">
      {props.text}
    </button>
  );
}

export default Button;
