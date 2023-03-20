import React from 'react'


const ButtonTest = (props) => {
  return (<button type="button" className={` ${props.Colorflag ? "bg-orange-400": "bg-red-900"} py-5 px-5  rounded`}>Click Me!</button>
  );
}

export default ButtonTest;
