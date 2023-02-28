import React from 'react'
import { useRouter } from 'next/router'


const JoinOurCommunity = () => {

    const router = useRouter()

    const handleClick = e => {
        e.preventDefault()
        router.push('https://thesoftaims.com/form')
    }


    return (
        <>
        <div className='blurred-background p-6 tracking-widest'></div>
        <div className='blurred-background h-10'></div>
            <div className='mx-[8%] flex justify-center'>
                <p className='text-sm md:text-2xl text-center font-light'>Join forces with our top-tier developers and bask in success. No more stress in your search for the ideal coder - our elite circle of tech talent is here to take your skills to new levels. Get ready to experience efficiency and quality like never before!</p>
            </div>
            <div className='flex justify-center mt-10'>
                <button type="button" onClick={handleClick}  className='button-pink flex items-center mx-10 hover:-rotate-3'>
                    <img src="twemoji_brain.svg" alt="Hire a software developer" />
                    <span className='mx-1 hover:text-black'>Hire Brains</span>
                </button>
            </div>
        </>
    )
}

export default JoinOurCommunity