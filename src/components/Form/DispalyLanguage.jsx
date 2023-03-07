import { useState } from "react";
import Flex from '../shared/Flex';

const DisplayLanguage = (props) => {
  const [isChecked, setIsChecked] = useState(props.checked);

  const handleCheck = () => {
    setIsChecked(!isChecked)
    props.onUpdate(props.text);
  }


  return (
    <>
      <input type="checkbox" className="hidden" id={props.id} checked={isChecked} onClick={() => handleCheck()} />
      <label htmlFor={props.id} className="">
        <div className={`content-box bg-[#17181a] px-11 py-5 rounded items-center  hover:opacity-100 ${isChecked ? "opacity-100" : "opacity-30"}`}  >
          <Flex extraClass={`justify-center ${isChecked ? "clicked-zoom" : "zoom"}`}>{props.svgComponent}</Flex>
          <h1 className="text-white text-center">{props.text}</h1>
        </div>
      </label>
    </>
  );
};


export default DisplayLanguage;