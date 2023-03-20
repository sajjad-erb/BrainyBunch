import React from 'react'
import { useRouter } from 'next/router'


const Banner = () => {

    const router = useRouter()

    const handleClick = e => {
        e.preventDefault()
        router.push('https://thesoftaims.com/form')
    }

    return (
        <>
            <div className=' mx-[8%] tracking-widest justify-center md:justify-start'>
                <div className='text-center md:text-left'>
                    <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold '>
                        <p className='text-2xl md:text-4xl font-medium '>
                            Tired of <span className='text-green-650'> vanilla developers?
                            </span>
                        </p>
                        Switch to <span className='text-pink-650'>  Brainy <br /> Bunch
                        </span> Knights
                    </h1>

                    <div className='flex justify-center md:justify-start md:items-center mt-5  '>
                        <img src="arrows-left.svg"
                            alt="brainy bunch developers"
                            className='hidden lg:block'
                        />
                        <p className='lg:mx-5 text-pink-650 text-sm md:text-xl lg:text-2xl font-light  '>Stand back and watch the magic happen!</p>
                    </div>
                    <p className='text-sm md:text-xl lg:text-2xl md:leading-[35px] font-light'>Brainy Bunch is teaming you up with developers <br /> who shall turn your code into gold faster than </p>
                    <p className='flex text-sm md:text-xl lg:text-2xl items-center font-light text-center lg:text-left justify-center md:justify-start'>
                        you can say <span className='brushed-background text-sm md:text-xl lg:text-2xl text-center lg:text-left'>'Abracadabra! </span>
                        <span className='mx-5'>
                            <img src="arrows-right.svg" alt="brainy bunch developers"
                                className='hidden lg:block'
                            />
                        </span>
                    </p>
                    <div className='flex mt-8 justify-center md:justify-start'>
                        <button type="button" onClick={handleClick} className='button-pink lg:text-2xl flex items-center hover:rotate-1' alt='hire a developer'>
                            <img src="armour-cta.svg" alt="fill up a form to hire a developer" className='h-[10px] md:h-[40px]' />
                            <p className='hover:text-green-650 text-xs md:text-xl '>Join the Hunt</p></button>
                        <img src="clock.svg" alt="get a developer in less than 24 hours" className='h-[80px]' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner