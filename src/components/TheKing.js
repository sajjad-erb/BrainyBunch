import React from 'react'

const TheKing = () => {
    return (
        <div className='mx-[8%] tracking-widest grid grid-cols-12 items-center gap-20'>
            <div className='col-span-8 text-right'>
                <h1 className='text-6xl'>All HAIL <span className='text-pink-650'> THE KING </span></h1>
                <p className='font-light text-xl'>Meet the mastermind behind "The Brainy Bunch",
                    King Harry, His Majesty who faced every possible danger in pursuit of finding tech geniuses.</p>
                <p className='font-light text-xl'>With years of experience and a keen eye for talent, King Harry has honed his ability to identify the perfect developer without even conducting an interview. Trust him and the Brainy Bunch to find you the best in the tech kingdom and lead you to success in your digital endeavours.</p>
                <div className='flex items-center justify-end '>
                    <img src="openmoji_linkedin.svg" alt=""  className='cursor-pointer'/>
                    <img src="twitter.svg" alt="" className='cursor-pointer' />
                    <img src="openmoji_facebook.svg" alt="" className='cursor-pointer' />
                </div>
            </div>
            <div className='col-span-4'>
                <img src="king.svg" alt="" />
            </div>
        </div>
    )
}

export default TheKing