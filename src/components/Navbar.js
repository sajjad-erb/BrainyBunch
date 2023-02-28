import React from 'react'
import { useRouter } from 'next/router'


const Navbar = () => {
    const router = useRouter()

    const handleClick = e => {
        e.preventDefault()
        router.push('https://thesoftaims.com/form')
      }

    return (
        <div className='flex justify-between items-center mx-[8%] flex-wrap'>
            <div className='flex items-center'>
                <img src="logo.svg"
                    alt="logo of brainy bunch"
                />
                <img
                    src="BRAINY BUNCH.svg"
                    alt="text of brainy bunch"
                    className='mx-6 h-5'
                />
            </div>
            <div className='flex'>
                <div className='hidden md:block'>
                    <button  type="button" onClick={handleClick} className='button-pink flex items-center mx-10 hover:rotate-1 '>
                        <img src="twemoji_brain.svg" alt="Hire a software developer" />
                        <span className='mx-1 hover:text-black'>Hire Brains</span>
                    </button>
                </div>
                <div className=' hidden md:block'>
                    <button className='button-green flex items-center hover:-rotate-1 '>
                        <img src="game-icons_swords-emblem.svg" alt="Join us to work for top clients" />
                        <span className='hover:text-green-650 mx-1'>Join our forces</span>
                    </button>
                </div>
                <div>
                    <img src="game-icons_sword-array.svg" alt="" className='rotate-[135deg] block md:hidden' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
