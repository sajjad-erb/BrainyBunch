import React from 'react'

const DeveloperSearch = () => {
    return (
        <div className='mx-[8%] grid grid-cols-12 items-center tracking-widest'>
            <div className='md:col-span-8 col-span-12 text-center md:text-start order-last md:order-first'>
                <h1 className='text-4xl md:text-6xl font-bold mt-10 md:mt-0'>The Ultimate Search for the Perfect <span className='text-pink-650'>Coding Knight</span> </h1>
                <p className='mt-6 text-sm md:text-xl font-light '>As a <span className='text-green-650'> busy kingdom </span> ruler, finding the right person for the job can be overwhelming. But don't worry, Brainy Bunch is here to help!</p>
                <p className='mt-6 text-sm md:text-xl font-light'>When many developers come forward to join the Brainy Bunch, only the most skilled are chosen to prove their abilities. It's like a kingdom of <span className='brushed-background'>coding knights</span>, and only the bravest and most talented make it through the challenges and tests.</p>
            </div>
            <div className='lg:col-span-4 col-span-12'>
                <img src="DevSearch.svg" alt="we thoroughly search every web developer resume" />
            </div>
        </div>
    )
}

export default DeveloperSearch