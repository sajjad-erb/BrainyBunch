import React from 'react'

const NinjaCode = () => {
    return (
        <div className='mx-[8%] tracking-widest'>
            <div className='grid grid-cols-12'>
                <div className='col-span-8'>
                    <h1 className='text-7xl  font-bold'> Rest assured that our developer will remain <span className='text-pink-650'>loyal</span>  to you </h1>
                    <p className='mt-6 text-xl font-light'>The Brainy Bunch is the dream team of coding wizards! Nothing can stop us, not even a traitor trying to sabotage our success. But don't worry, if that ever happens, we'll code Marshall the traitor and we've got backup developers ready to step in and save the day. </p>
                    <p className='mt-6 text-xl font-light'>And the best part? <span className='text-pink-650'> It won't cost you a penny extra!</span> So sit back, relax, and let the Brainy Bunch work their magic. Success is always in the cards with us, it's going to be a wild ride, but oh so much fun!</p>
                </div>
                <div className='col-span-4'>
                    <img src="traitor-no.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NinjaCode