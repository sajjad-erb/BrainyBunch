import React from 'react'
const Button = (props) => {
  return (
    <div className=''>
      <div className='flex justify-center mt-10 '>
        <button type="button"
          className='button-green flex items-center hover:-rotate-1'>
          <img src="game-icons_swords-emblem.svg" alt="button" />
          <span className='hover:text-green-650 w-36'>{props.text}</span>
        </button>
      </div>
    </div>
  );
}

export default Button
  ;