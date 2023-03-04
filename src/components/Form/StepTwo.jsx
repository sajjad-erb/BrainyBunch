import React from 'react'
import DisplayLanguage from './DispalyLanguage';
import { FlutterSvg, AngularSvg, NodeJsSvg, PythonSvg, ReactNativeSvg } from '@/assets/icons/LanguageIcons';

const StepTwo = () => {
  return (
    <div className='flex gap-8  justify-center mt-5'>
      <DisplayLanguage svgComponent={<ReactNativeSvg />} text={"ReactNative"} />
      <DisplayLanguage svgComponent={<PythonSvg />} text={"Python"} />
      <DisplayLanguage svgComponent={<NodeJsSvg />} text={"NodeJS"} />
      <DisplayLanguage svgComponent={<AngularSvg />} text={"Angular"} />
      <DisplayLanguage svgComponent={<FlutterSvg />} text={"Flutter"} />
    </div>
  );
}

export default StepTwo;