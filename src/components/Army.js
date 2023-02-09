import React from 'react'

const Army = () => {
  return (
    <div className='mx-[8%] grid grid-cols-12 items-end'>
      <div className='col-span-8'>
        <h1 className='text-7xl font-bold '>The <span className='text-pink-650'>ARMY</span> of Various
          Programming Languages</h1>
        <p className='mt-6 text-xl font-light'>The Brainy Bunch boasts an army of over <span className='text-green-650'>326</span> elite developers, each with their own unique skill set and expertise in various programming languages. From the sophistication of Python to the might of Java, your project is in the best of hands. </p>
        <p className='mt-6 text-xl font-light'><span className='text-5xl'>But that's not all </span>Our premium commanders and sail warriors, such as CTOs and Senior Devs, bring a full-stack of expertise to the table.</p>
      </div>
      <div className='col-span-4'>
        <img src="castle.svg" alt="" />
      </div>
    </div>
  )
}

export default Army