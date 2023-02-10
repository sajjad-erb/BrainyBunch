import React from 'react'

const HiringProblem = () => {
    return (
        <div className='mx-[8%] grid grid-cols-12 items-center tracking-widest'>
            <div className='col-span-8'>
                <h1 className='text-7xl font-bold '>
                    No quest too big,
                   <p> No code too complex </p>
                </h1>
                <p className='text-xl font-light mt-6'>Get ready to conquer that <span className='text-green-650'> mountain of code! </span> Brainy Bunch commands a formidable army of elite developers. Our premium commanders, the skilled brigade of coding knights, lead their troops with bravery and expertise.</p>
                <p className='text-xl font-light mt-6'>Think of us as fearless explorers in the tech kingdom, searching high and low for the most amazing coding knights.Our mission is to find those special gems who shine with <span className='text-pink-650'> brilliance, skill, and a dash of </span>individuality.</p>
            </div>
            <div className='col-span-4'>
                <img src="Dragon.svg" alt="Our dragon will protect your kingdom (startup) from bad enemies (bad developers)" />
            </div>
        </div>
    )
}

export default HiringProblem