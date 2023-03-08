import React from 'react'
import DisplayLanguage from './DispalyLanguage';
import { FlutterSvg, AngularSvg, NodeJsSvg, PythonSvg, ReactNativeSvg, ShopifySvg, TailwindSvg, BootstrapSvg, PhpSvg, CssSvg } from '@/assets/icons/Languages';
import Button from '../shared/Button';
import InputField from '../shared/InputField';
import Grid from '../shared/Grid';

const StepTwo = (props) => {
  const languages = [
    { svgComponent: <ReactNativeSvg />, text: "React" },
    { svgComponent: <PythonSvg />, text: "Python" },
    { svgComponent: <NodeJsSvg />, text: "NodeJS" },
    { svgComponent: <AngularSvg />, text: "Angular" },
    { svgComponent: <FlutterSvg />, text: "Flutter" },
    { svgComponent: <ShopifySvg />, text: "Shopify" },
    { svgComponent: <TailwindSvg />, text: "Tailwind" },
    { svgComponent: <BootstrapSvg />, text: "Bootstrap" },
    { svgComponent: <PhpSvg />, text: "Php" },
    { svgComponent: <CssSvg />, text: "Css" },
  ];
  const languagesSelect = (newValue) => {
    props.selectedLanguagues(newValue)
  }

  return (
    <>
      <div className='mx-auto w-11/12 md:w-10/12'>
        <h6 className='text-2xl'> Let us know your <span className="text-pink-650"> product</span> desires;</h6>
        <p className='text-sm'>and we'll strive to fulfill them with great care,</p>
        <p className='text-sm'> and pleausre, as if you were your loyal subjects.</p>
      </div>

      <div className="mb-4">
        <div className='mx-auto w-11/12 md:w-10/12'>
          <div>
            <InputField inputClass={"mt-10 shadow appearance-none border-pink-650 rounded-xl w-full md:w-2/5 py-6 text-pink-650 focus:outline-none bg-[#455A64]"} placeholder={"Tell us your needs"} type={"text"} />
          </div>
          <div>
            <InputField inputClass={"mt-5 shadow appearance-none border-pink-650  rounded-xl w-full md:w-2/5 py-3 text-pink-650  focus:outline-none focus:shadow-outline bg-[#455A64]"} placeholder={"Tell us your needs"} type={"text"} />
          </div>
          <h6 className='text-2xl mt-10'>A skilled developer in your relam</h6>
          <h6 className='text-2xl '> must possess great mastery in:</h6>

        </div>
        <div className='w-11/12 md:w-10/12 mx-auto'>
          <Grid extraClass={"gap-10 grid-cols-2 md:grid-cols-5 justify-center mt-16"}>
            {languages.map((lang, index) => (
              <DisplayLanguage key={index} id={index} svgComponent={lang.svgComponent} text={lang.text} onUpdate={languagesSelect} checked={props.selected.includes(lang.text) ? true : false} />
            ))}
          </Grid>

        </div>
        <div className='w-11/12 mx-auto md:w-7/12'>
          <Grid extraClass={"mt-10 gap-y-5 gap-x-8 grid-cols-1 md:grid-cols-2 justify-center mb-6"}>
            <div className=''>
              <Button
                text="Previous"
                btnClassName={"border-[#7ff221] w-full rounded-2xl  py-6 px-16 bg-[#e65be8] hover:bg-green-650 text-pink"}
                onClick={() => props.previousForm()} />
            </div>
            <div className=''>
              <Button
                text="Submit"
                btnClassName={"order-[#7ff221] w-full rounded-2xl py-6 px-16 bg-[#e65be8] hover:bg-green-650 text-pink"}
                onClick={() => props.handleSubmit()} />
            </div>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default StepTwo;