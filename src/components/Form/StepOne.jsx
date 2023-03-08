import React from 'react'
import InputField from '../shared/InputField';
import Form from '../shared/Form';
import Image from '../shared/Image';
import Button from '../shared/Button';
import Flex from '../shared/Flex';

const StepOne
  = (props) => {
    return (
      <>
        <div className='my-20'>
          <div className='px-4 md:px-24 text-center md:text-left'>
            <p className='font-bold text-3xl'>Join us in our <span className=' text-[#7ff221]'>quest</span>  to discover a skilled developer for your  needs!</p>
          </div>

          <Form extraClassName={"text-center mt-16"}>
            <div className="mt-5">
              <InputField type={"text"} inputClass={"appearance-none  border-[#7ff221] rounded-2xl w-3/4 py-7 px-3 text-[#7ff221] bg-[#e65be8] leading-tight focus:outline-none focus:shadow-outline"} placeholder={"Enter FullName"} onChange={(e) => props.onNameChange(e)} />
            </div>

            <div className="mt-10">
              <InputField type={"email"} inputClass={"appearance-none  border-[#7ff221] rounded-2xl w-3/4 py-7 px-3 text-[#7ff221] bg-[#e65be8] leading-tight focus:outline-none focus:shadow-outline"} placeholder={"Enter Email"} onChange={(e) => props.onEmailChange(e)} />
            </div>
            <div className="mt-10">

              <Button
                text="Next"
                btnClassName={"order-[#7ff221] rounded-2xl w-3/4 py-7 px-3 bg-[#e65be8] hover:bg-green-650 text-pink"}
                onClick={() => props.nextButton()} />
            </div>
          </Form>
        </div>

        <Flex extraClass={"justify-center"}>
          <Image src="CharacterStepForm.svg" alt="logo of brainy bunch" extraClassName={"mx-6 w-36 md:w-auto"} />
        </Flex>
      </>);
  }

export default StepOne
  ;