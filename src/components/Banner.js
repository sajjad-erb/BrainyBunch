import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='grid grid-cols-12 mx-[8%] tracking-widest'>
                <div className='col-span-10 text-center md:text-start'>
                    <h1 className='text-8xl font-bold '>
                        <p className='text-4xl font-medium '>
                            Tired of <span className='text-green-650'> vanilla developers?
                            </span>
                        </p>
                        Switch to <span className='text-pink-650'> Brainy Bunch
                        </span> Knights
                    </h1>

                    <div className='flex items-center mt-5'>
                        <img src="arrows-left.svg"
                            alt="brainy bunch developers"
                            className='hidden lg:block'
                        />
                        <p className='mx-5 text-pink-650 text-2xl font-light'>Stand back and watch the magic happen!</p>
                    </div>
                    <p className='text-2xl leading-[35px] font-light'>Brainy Bunch is teaming you up with developers <br /> who shall turn your code into gold faster than </p>
                    <p className='flex text-2xl items-center font-light'>
                        you can say 'Abracadabra!
                        <span className='mx-5'>
                            <img src="arrows-right.svg" alt="brainy bunch developers"
                            className='hidden lg:block'
                            />
                        </span>
                    </p>
                    <div className='flex mt-8'>
                        <button className='button-pink text-2xl flex items-center' alt='hire a developer'>
                            <img src="armour-cta.svg" alt="fill up a form to hire a developer" className='h-[40px]'/>
                            <p className='hover:text-green-650'>Join the Hunt</p></button>
                        <img src="clock.svg" alt="get a developer in less than 24 hours" className='h-[80px]' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner