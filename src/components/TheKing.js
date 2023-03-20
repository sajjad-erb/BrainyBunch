import React from 'react'

const TheKing = () => {
    return (
        <div className='mx-[8%] tracking-widest grid lg:grid-cols-12 items-center gap-20'>
            <div className='lg:col-span-8 lg:text-right text-center'>
                <h1 className='md:text-6xl text-3xl '>All HAIL <span className='text-green-650'> THE KING </span></h1>
                <p className='font-light text-sm md:text-xl lg:text-right text-center'>Meet the mastermind behind "The Brainy Bunch",<span className='brushed-background'>
                    King Harry</span>, His Majesty who faced every possible danger in pursuit of finding tech geniuses.</p>
                <p className='font-light text-sm md:text-xl lg:text-right text-center mt-6 md:mt-0'>With years of experience and a keen eye for talent, King Harry has honed his ability to identify the perfect developer without even conducting an interview.<span className='brushed-background'> Trust him and the Brainy Bunch </span> to find you the best in the tech kingdom and lead you to success in your digital endeavours.</p>
                <div className='flex items-center lg:justify-end justify-center '>
                    <img src="openmoji_linkedin.svg" alt="linkedin logo with a link" className='cursor-pointer' />
                    <img src="twitter.svg" alt="twitter logo with a link" className='cursor-pointer' />
                    <img src="openmoji_facebook.svg" alt="facebook link with a link" className='cursor-pointer' />
                </div>
            </div>
            <div className='lg:col-span-4 hidden md:flex justify-center'>
                <img src="king.svg" alt="The founder of brainy bunch" />
            </div>
        </div>
    )
}

export default TheKing