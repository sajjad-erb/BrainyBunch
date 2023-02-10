import React from 'react'

const CodeStory = () => {
  return (
    <div className='mx-[8%] tracking-widest'>
      <h1 className='text-7xl w-[75%] font-bold'>Choose the one that perfectly complements your <span className='brushed-background'> requirements</span></h1>
      <div className='grid grid-cols-12'>
        <div className='col-span-9 grid grid-cols-12 items-center mt-28 gap-10'>
          <img src="product-down.svg" alt="product going down?" className='col-span-3' />
          <p className='text-xl col-span-9 font-light font-light'>Once upon a time, a king's kingdom was facing a major crisis. His product, the backbone of the kingdom's economy, was failing and the people were becoming discontent.</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <img src="arrow-code-story.svg" alt="Hire top talents" className='h-[100px]' />
      </div>
      <div className='grid grid-cols-12 text-right'>
        <div className='col-span-3'></div>
        <div className='col-span-9 grid grid-cols-12 items-center mt-16 gap-10'>
          <img src="castle (1).svg" alt="product going down?" className='col-span-3 order-last' />
          <p className='text-xl col-span-9 font-light'>The king summoned the Brainy Bunch to his court and they quickly sprang into action. They worked tirelessly, using their expertise to improve the product. </p>
        </div>
      </div>
      <div className='flex justify-center rotate-90'>
        <img src="arrow-code-story.svg" alt="Hire top talents" className='h-[100px]' />
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-9 grid grid-cols-12 items-center mt-16 gap-10'>
          <img src="character.svg" alt="product going down?" className='col-span-3 ' />
          <p className='text-xl col-span-9 font-light'>But the Brainy Bunch didn't stop there. They continued to work with the king, implementing new technologies and systems that made the kingdom stronger and more prosperous than ever.</p>
        </div>
      </div>
      <div className='flex justify-center '>
        <img src="arrow-code-story.svg" alt="Hire top talents"  className='h-[100px]'/>
      </div>
      <div className='grid grid-cols-12 text-right'>
        <div className='col-span-3'></div>
        <div className='col-span-9 grid grid-cols-12 items-center mt-16 gap-10'>
          <img src="Treasure.svg" alt="product going down?" className='col-span-3 order-last' />
          <p className='text-xl col-span-9 font-light'>The king was grateful for their help and his kingdom became known as the strongest in the land. He was remembered as the wise ruler who turned his kingdom around with the help of the Brainy Bunch.</p>
        </div>
      </div>
    </div>
  )
}

export default CodeStory