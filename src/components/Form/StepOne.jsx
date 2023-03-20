import React, { useEffect, useState } from 'react'
import InputField from '../shared/InputField';
import Form from '../shared/Form';
import Image from '../shared/Image';
import Button from '../shared/Button';
import Flex from '../shared/Flex';

const StepOne
  = (props) => {
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
      if (props.name.length > 0 && props.email.length > 0) {
        setDisabled(false)
      }
      else {
        setDisabled(true)
      }
    }, [props.name, props.email])

    return (
      <>
        <div className='my-20'>
          <div className='px-4 md:px-24 text-center md:text-left'>
            <p className='font-bold text-3xl'>Join us in our <span className=' text-[#7ff221]'>quest</span>  to discover a skilled developer for your  needs!</p>
          </div>

          <Form extraClassName={"text-center mt-16"}>
            <div className="mt-5">
              <InputField type={"text"} value={props.name} inputClass={"appearance-none rounded-2xl w-3/4 py-7 px-3 text-[#FF3DF0] bg-[#455A64] leading-tight border-green-650 focus:border-green-650   placeholder-[#7ff221]"} placeholder={"Enter Full Name"} onChange={(e) => props.onNameChange(e)} />
            </div>

            <div className="mt-10">
              <InputField type={"email"} value={props.email} inputClass={"appearance-none rounded-2xl w-3/4 py-7 px-3 text-[#FF3DF0] bg-[#455A64] leading-tight focus:border-green-650 border-green-650  placeholder-[#7ff221]"} placeholder={"Enter Email"} onChange={(e) => props.onEmailChange(e)} />
            </div>

            <div className="mt-10">

              <Button
                text="Next"
                disabled={disabled}
                btnClassName={`order-[#7ff221] rounded-2xl lg:w-3/4 w-2/4 lg:py-7  py-4  bg-[#e65be8] ${!disabled ? "hover:bg-green-650" : ""} text-pink`}
                onClick={() => props.nextButton()} />
            </div>
          </Form>
        </div>

        <Flex extraClass={"justify-center"}>
          <Image src="CharacterStepForm.svg" alt="logo of brainy bunch" extraClassName={"mx-6 w-36 md:w-1/4"} />
        </Flex>
      </>);
  }

export default StepOne
  ;