import React, { useEffect, useState } from 'react'
import DisplayLanguage from './DispalyLanguage';
import { FlutterSvg, ReactNativeSvg, AngularSvg, NodeJsSvg, PythonSvg, ShopifySvg, TailwindSvg, BootstrapSvg, PhpSvg, CssSvg, MachineLearningSvg, AndriodSvg, VueSvg, AwsSvg, DjangoSvg, TypescriptSvg, RubyonrailsSvg, JavascriptSvg, MachinelearningSvg } from '@/assets/icons/Languages';
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
    { svgComponent: <MachineLearningSvg />, text: "Machine" },
    { svgComponent: <AndriodSvg />, text: "Andriod" },
    { svgComponent: <VueSvg />, text: "Vue" },
    { svgComponent: <AwsSvg />, text: "Aws" },
    { svgComponent: <DjangoSvg />, text: "Django" },
    { svgComponent: <TypescriptSvg />, text: "Typescript" },
    { svgComponent: <RubyonrailsSvg />, text: "Ruby on Rails" },
    { svgComponent: <JavascriptSvg />, text: "Javascript" },
    { svgComponent: <MachinelearningSvg />, text: "MachineLearning" },
    // { svgComponent: <TypescriptSvg />, text: "Typescript" },



  ];
  const languagesSelect = (newValue) => {
    props.selectedLanguagues(newValue)
  }
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (props.parameter1.length > 0 && props.parameter2.length > 0) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }, [props.parameter1, props.parameter2])

  return (
    <>
      <div className='mx-auto w-11/12 md:w-10/12'>
        <h6 className='text-5xl'> Let us know your <span className="text-pink-650"> product</span> desires;</h6>
        <p className='text-2xl'>and we'll strive to fulfill them with great care,</p>
        <p className='text-2xl'> and pleausre, as if you were your loyal subjects.</p>
      </div>

      <div className="mb-4">
        <div className='mx-auto w-11/12 md:w-10/12'>
          <div>
            <InputField value={props.parameter1} inputClass={"mt-10 shadow appearance-none border-green-650 focus:border-pink-650 rounded-xl w-full md:w-3/5 py-14 text-[#FF3DF0] bg-[#455A64] placeholder-[#7ff221]"} placeholder={"Tell us your needs"} type={"text"} onChange={(e) => props.onDeveloper(e)} />
          </div>
          <div>
            <InputField value={props.parameter2} inputClass={"mt-8 shadow appearance-none border-green-650 focus:border-pink-650  rounded-xl w-full md:w-3/5 py-6 text-[#FF3DF0]  bg-[#455A64] placeholder-[#7ff221]"} placeholder={"Tell us your needs"} type={"text"} onChange={(e) => props.onDeveloperSecond(e)} />
          </div>
          <h6 className='text-4xl mt-10'>A skilled developer in your relam</h6>
          <h6 className='text-4xl '> must possess great mastery in:</h6>

        </div>
        <div className='w-11/12 md:w-10/12 mx-auto'>
          <Grid extraClass={"gap-10 grid-cols-2 lg:grid-cols-5 justify-center mt-16"}>
            {languages.map((lang, index) => (
              <DisplayLanguage key={index} id={index} svgComponent={lang.svgComponent} text={lang.text} onUpdate={languagesSelect} checked={props.selected.includes(lang.text) ? true : false} />
            ))}
          </Grid>

        </div>
        <div className='w-11/12 mx-auto md:w-7/12 '>
          <Grid extraClass={" mt-10 grid-cols-1 lg:grid-cols-2 text-center mb-6"}>
            <div className=''>
              <Button
                text="Previous"
                btnClassName={"border-[#7ff221]  rounded-2xl lg:w-3/4 w-2/4 lg:py-7  py-4  bg-[#e65be8] hover:bg-green-650 text-pink"}
                onClick={() => props.previousForm()} />
            </div>
            <div className=''>
              <Button
                text="Submit"
                disabled={disabled}
                btnClassName={`order-[#7ff221]  rounded-2xl mt-2 lg:mt-0 lg:w-3/4 w-2/4 lg:py-7 py-4 bg-[#e65be8] ${!disabled ? "hover:bg-green-650" : ""} text-pink`}
                onClick={() => props.handleSubmit()} />
            </div>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default StepTwo;
