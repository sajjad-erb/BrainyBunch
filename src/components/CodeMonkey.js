import React from 'react'

const CodeMonkey = () => {
    return (

        <div className='text-center mx-[14%] text-xl font-light tracking-widest relative'>
            <p>Our developers are more than just code monkeys - they're a rare breed of tech geniuses with a sense of humor. They're the ones who will make your website dance, your app sing, and your code sparkle.</p>
            <img src="left-bars.svg" alt="" className='h-[100px] absolute top-0 -left-14 hidden lg:block'  />
            <img src="right-bars.svg" alt="" className='h-[100px] absolute  top-0 -right-14 hidden lg:block' />
            <div className='flex justify-end '>
            <img src="musical-notes.svg" alt="" className='hidden lg:block' />
            </div>
        </div>

    )
}

export default CodeMonkey