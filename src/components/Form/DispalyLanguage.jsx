import React from 'react'
const DisplayLanguage = (props) => {
  return (
    <div className='bg-[#17181a] px-10 py-5 rounded '>
      {props.svgComponent}
      <h1 className='text-[white]'>{props.text}</h1>
    </div>
  );
}

export default DisplayLanguage;