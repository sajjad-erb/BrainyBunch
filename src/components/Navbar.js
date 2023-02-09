import React from 'react'

const Navbar = () => {
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
                <button className='mr-3 hover:text-xl hover:text-green-650'>login</button>
                <button className='button-pink flex items-center mx-10'>
                    <img src="twemoji_brain.svg" alt="Hire a software developer" />
                    <span className='mx-1 hover:text-black'>Hire Brains</span>
                </button>
                <button className='button-green flex items-center'>
                    <img src="game-icons_swords-emblem.svg" alt="Join us to work for top clients" />
                    <span className='hover:text-green-650 mx-1'>Join our forces</span>
                </button>
            </div>
        </div>
    )
}

export default Navbar
