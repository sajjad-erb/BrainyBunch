import React from 'react';
import Button from './Button';
import ReactNative from '../assets/icons/ReactNative.svg'
const Form = () => {
  return (
    <>
      <div className='flex justify-center mt-12' >
        <img src="logo.svg"
          alt="logo of brainy bunch"
        />
        <img
          src="BRAINY BUNCH.svg"
          alt="text of brainy bunch"
          className='mx-6' />

      </div>


      <div className='grid grid-cols-2'>
        <div className='my-28'>
          <div className='px-24'>
            <p className='font-bold text-3xl'>Join us in our <span className=' text-[#7ff221]'>quest</span>  to discover a skilled developer for your  needs!</p>
          </div>
          <form class="text-center mt-16">
            <div class="mt-5">
              <input class="shadow appearance-none border-[#7ff221] rounded-2xl w-3/4  py-7 px-3 bg-[#455a64] text-[#7ff221] leading-tight focus:outline-none focus:shadow-outline" id="Full Name" type="text" placeholder="Full Name" />
            </div>



            <div class="mt-10">
              <input class="shadow appearance-none  border-[#7ff221] rounded-2xl w-3/4 py-7 px-3 bg-[#455a64] text-[#7ff221] leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" placeholder="Email" />
            </div>


            <div class="mt-10">
              <input
                class="appearance-none  border-[#7ff221] rounded-2xl w-3/4 py-7 px-3 text-[#7ff221] bg-[#e65be8] leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder=""
              />
            </div>
          </form >
        </div>
        <div className='flex justify-center'>
          <img
            src="CharacterStepForm.svg"
            alt="text of brainy bunch"
            className='mx-6' />
        </div>

        <div className='flex gap-8  justify-center mt-5'>
          <div className='bg-[#17181a] px-10 py-5 rounded '>
            <img src="ReactNative.svg"
              alt="text of brainy bunch"
            />
            <h1 className='text-[white]'>React</h1>
          </div>
          <div className='bg-[#17181a] px-10 py-5 rounded '>
            <img src="Angular.svg" alt="" />
            <h1 className='text-[white]'>Angular</h1>
          </div>
          <div className='bg-[#17181a] px-10 py-5 rounded '>
            <img src="Nodejs.svg" alt="" />
            <h1 className='text-[white]'>Nodejs</h1>
          </div>
          <div className='bg-[#17181a] px-10 py-5 rounded '>
            <img src="Payton.svg" alt="" />
            <h1 className='text-[white]'>Python</h1>

          </div>
          <div className='bg-[#17181a] px-10 py-5 rounded '>
            <img src="Flutter.svg" alt="" />
            <h1 className='text-[white]'>Flutter</h1>
          </div>
        </div>



      </div>

























    </>




  );
}

export default Form;