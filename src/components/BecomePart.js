import React from 'react'
import { useRouter } from 'next/router'


const BecomePart = () => {


    const router = useRouter()

    const handleClick = e => {
        e.preventDefault()
        router.push('https://thesoftaims.com/form')
    }



    return (
        <>
            <div className='blurred-background p-8'></div>
            <div className='mx-[8%] flex justify-center tracking-widest text-center md:text-left'>
                <h1 className='text-4xl brushed-background'>Are you also ready to become the strongest in the land?</h1>
            </div>
            <div className='flex justify-center mt-10 '>
                <button type="button" onClick={handleClick} className='button-green flex items-center hover:-rotate-1'>
                    <img src="game-icons_swords-emblem.svg" alt="Join us to work for top clients" />
                    <span className='hover:text-green-650 mx-1 '>Join our forces</span>
                </button>
            </div>
        </>
    )
}

export default BecomePart