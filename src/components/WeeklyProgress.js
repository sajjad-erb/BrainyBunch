import React from 'react'

const WeeklyProgress = () => {
    return (
        <div className='mx-[8%] lg:grid lg:grid-cols-12 items-center tracking-widest'>
            <div className='md:col-span-6 lg:col-span-4 flex justify-center'>
                <img src="calender.svg" alt="" />
            </div>
            <div className='md:col-span-9 lg:col-span-8 text-right mt-20 '>
                <h1 className='text-4xl md:text-7xl font-bold text-center md:text-right mt-12 md:mt-0'>Keep a watchful eye on the progress of your subjects <span className='text-pink-650'> (developers) </span></h1>
                <p className='text-sm md:text-xl font-light mt-6 text-center md:text-right'> <span className='text-green-650'>With our Weekly Royal Reports </span>, you'll have the power to know all! From tasks completed by your loyal subjects to the hours they've put in, you'll be in the loop on everything</p>
                <p className='text-sm md:text-xl font-light mt-6 text-center md:text-right'>Should you need assistance or have a question, do not fret! Our <span className='text-pink-650'>Royal Support Team </span> is just a scroll away. We're always ready to serve and keep your kingdom on the path to greatness.</p>
            </div>
        </div>
    )
}

export default WeeklyProgress