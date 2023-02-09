import React from 'react'

const BecomePart = () => {
    return (
        <>
            <div className='mx-[8%] flex justify-center tracking-widest'>
                <h1 className='text-4xl'>Are you also ready to become the strongest in the land?</h1>
            </div>
            <div className='flex justify-center mt-10 '>
                <button className='button-green flex items-center'>
                    <img src="game-icons_swords-emblem.svg" alt="Join us to work for top clients" />
                    <span className='hover:text-green-650 mx-1'>Join our forces</span>
                </button>
            </div>
        </>
    )
}

export default BecomePart