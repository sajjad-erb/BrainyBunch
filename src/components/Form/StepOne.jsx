import React from 'react'
import InputField from '../shared/InputField';
import Form from '../shared/Form';
import Image from '../shared/Image';

const StepOne
  = () => {
    return (
      <>
        <div className='my-28'>
          <div className='px-24'>
            <p className='font-bold text-3xl'>Join us in our <span className=' text-[#7ff221]'>quest</span>  to discover a skilled developer for your  needs!</p>
          </div>

          <Form extraClassName={"text-center mt-16"}>
            <div className="mt-5">
              <InputField type={"text"} inputClass={"appearance-none  border-[#7ff221] rounded-2xl w-3/4 py-7 px-3 text-[#7ff221] bg-[#e65be8] leading-tight focus:outline-none focus:shadow-outline"} placeholder={"Enter FullName"} />
            </div>

            <div className="mt-10">
              <InputField type={"email"} inputClass={"appearance-none  border-[#7ff221] rounded-2xl w-3/4 py-7 px-3 text-[#7ff221] bg-[#e65be8] leading-tight focus:outline-none focus:shadow-outline"} placeholder={"Enter Email"} />
            </div>

          </Form>
        </div>
        <div className='flex justify-center'>
          <Image src="CharacterStepForm.svg" alt="logo of brainy bunch" extraClassName={"mx-6"} />
        </div>
      </>);
  }

export default StepOne
  ;