import React from 'react'

const PaymentPlans = () => {
  return (
    <div className='mx-[8%] tracking-widest'>
      <div className='flex justify-center'>
        <h1 className='text-4xl md:text-6xl lg:w-[75%] font-bold text-center md:text-left'>Sparkle with Creativity without destroying Your <span className='text-green-650'> Kingdom's Wealth</span></h1>
        <img src="TreasureForPlans.svg" alt="Save your money while hiring software engineers" className='hidden' />
      </div>
      <div className='md:grid md:grid-cols-12 mt-14 gap-12 items-center'>
        <div className='md:col-span-4 '>
          <img src="gray-flames.svg" alt="" className='w-[100%]' />
          <div className='flex flex-col items-center border-b-[1px] border-l-[1px] border-r-[1px] border-gray-600 bg-black-750 h-[90vh]'>
            <img src="squad-leader.svg" alt="Junior Developer" className='mt-16' />
            <h1 className='lg:text-4xl text-xl mt-6'>Squad Leader</h1>
            <p className='text-green-650 mt-6'>$20-$30 per hour</p>
            <div className='text-center mt-6 font-light'>
              <p>Full-time and part-time available</p>
              <p className='mt-4'>1 - 2 years of experience</p>
              <p className='mt-4'>Weekly reporting</p>
              <p className='mt-4'>100 developers available</p>
              <p className='mt-4'>Replacement guarantee</p>
            </div>
            <button className='button-green md:mx-2 lg:mx-0 flex items-center lg:mt-6 hover:-rotate-1'>
              <img src="game-icons_swords-emblem.svg" alt="Join us to work for top clients" />
              <span className='hover:text-green-650 text-xs lg:text-base mx-1'>Get Allegiance</span>
            </button>
          </div>
        </div>

        <div className='md:col-span-4  mt-44 md:mt-0'>
          <img src="flames-green.svg" alt="" className='w-[100%]' />
          <div className='flex flex-col items-center border-b-2 border-l-2 border-r-2 bg-black-750 border-green-650 h-[90vh]'>
            <img src="game-icons_sharp-axe.svg" alt="Senior Developer" className='mt-8 hover:rotate-45' />
            <h1 className='lg:text-4xl text-xl mt-6'>Commander</h1>
            <p className='text-green-650 mt-6'>$35-$80 per hour</p>
            <div className='text-center  mt-6 font-light'>
              <p>Full-time and part-time available</p>
              <p className='mt-4'>3 - 5 years of experience</p>
              <p className='mt-4'>Weekly reporting</p>
              <p className='mt-4'>100 developers available</p>
              <p className='mt-4'>Replacement guarantee</p>
            </div>
            <button className='button-green md:mx-2 lg:mx-0 flex items-center lg:mt-6 hover:rotate-1'>
              <img src="game-icons_swords-emblem.svg" alt="Join us to work for top clients" />
              <span className='hover:text-green-650 text-xs lg:text-base mx-1'>Get Allegiance</span>
            </button>
          </div>
        </div>

        <div className='md:col-span-4 col-span-12 mt-44 md:mt-0'>
          <img src="flames-purple.svg" alt="" className='w-[100%]' />
          <div className='flex flex-col items-center border-b-2 border-l-2 border-r-2 bg-black-750 border-pink-650 h-[90vh]'>
            <img src="emojione-monotone_crossed-swords.svg" alt="CTO Position" className='mt-8' />
            <h1 className='lg:text-4xl text-xl mt-6'>General</h1>
            <p className='text-pink-650 mt-6'>Custom Pricing</p>
            <div className='text-center mt-6 font-light'>
              <p>Full-time and part-time available</p>
              <p className='mt-4'>6+ years of experience</p>
              <p className='mt-4'>Weekly reporting</p>
              <p className='mt-4'>100 developers available</p>
              <p className='mt-4'>Replacement guarantee</p>
            </div>
            <button className='button-green flex md:mx-2 lg:mx-0 items-center lg:mt-6 hover:-rotate-1'>
              <img src="game-icons_swords-emblem.svg" alt="Join us to work for top clients" />
              <span className='hover:text-green-650 text-xs lg:text-base  mx-1'>Get Allegiance</span>
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-44 '>
        <img src="arrows-left.svg" alt="Save Money" />
        <h2 className='text-xl md:text-3xl mx-10 text-center'>Cost-saving revolution starts now!!!!</h2>
        <img src="arrows-right.svg" alt="Save Money" />
      </div>
    </div>
  )
}

export default PaymentPlans