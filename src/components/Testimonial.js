import React from 'react'

const Testimonial = () => {
    return (
        <div className='mx-[8%] flex'>
            <div className='grid grid-cols-12 tracking-widest gap-20'>
                <div className='col-span-6 flex flex-col '>
                    <p className='bg-black-650 border-2 border-white p-6 mt-6 testominals text-light'>“I had the pleasure of working with the developers at Brainy Bunch and I was blown away by their level of expertise.
                        I highly recommend their services to anyone looking for top-notch tech talent."
                    </p>
                    <div className='flex flex-col items-start'>
                        <img src="charles.svg" alt="CEO of developers core" className='mt-6 h-44 hover:-rotate-90' />
                        <p className='text-xl'>Charles <span className='text-pink-650'>| CEO of DevelopersCore </span></p>
                    </div>
                </div>
                <div className='col-span-6 flex flex-col justify-self-start '>
                    <p className='bg-black-650 border-2 border-white tracking-widest order-last p-6 mt-6 testominals text-light'>“Brainy Bunch exceeded all of my expectations. Their developers not only brought my website to the next level, but they also provided creative solutions that elevated the user experience"
                    </p>
                    <div className='flex flex-col items-end'>
                        <img src="james.svg" alt="CEO of sparks " className='h-90 hover:-rotate-90' />
                        <p className='text-xl mt-5'>James <span className='text-green-650'>| Owner of Sparks </span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial