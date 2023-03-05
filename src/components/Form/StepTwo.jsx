import React from 'react'
import DisplayLanguage from './DispalyLanguage';
import { FlutterSvg, AngularSvg, NodeJsSvg, PythonSvg, ReactNativeSvg } from '@/assets/icons/Languages';
import Button from '../shared/Button';
import Flex from '../shared/Flex';

const StepTwo = (props) => {
  return (
    <>
      <div>
        <Flex extraClass={"gap-8 justify-center mt-5"}>
          <DisplayLanguage svgComponent={<ReactNativeSvg />} text={"ReactNative"} />
          <DisplayLanguage svgComponent={<PythonSvg />} text={"Python"} />
          <DisplayLanguage svgComponent={<NodeJsSvg />} text={"NodeJS"} />
          <DisplayLanguage svgComponent={<AngularSvg />} text={"Angular"} />
          <DisplayLanguage svgComponent={<FlutterSvg />} text={"Flutter"} />
        </Flex>
      </div>
      <div>
        <Button
          text="Previous"
          btnClassName={"order-[#7ff221] rounded-2xl w-3/4 py-7 px-3 bg-[#e65be8] hover:bg-green-650 text-pink"}
          onClick={() => props.previousForm()} />
        <Button
          text="Submit"
          btnClassName={"order-[#7ff221] rounded-2xl w-3/4 py-7 px-3 bg-[#e65be8] hover:bg-green-650 text-pink"}
          onClick={() => props.handleSubmit()} />
      </div>
    </>
  );
}

export default StepTwo;