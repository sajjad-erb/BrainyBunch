import React from 'react'

const SelectionProcess = () => {
    return (
        <div className='mx-[8%] tracking-widest'>
            <h1 className='text-7xl w-[70%] font-bold '> The Imperial Selection Process of our Knights </h1>
            <div className='grid grid-cols-12 gap-24'>
                <div className='col-span-6 h-[75%] bg-black-650 mt-20 shadow-outline-white'>
                    <div className=' p-[12%] border-2 border-pink-650 -rotate-2'>
                        <h5 className='text-4xl '>The Resume Evaluation</h5>
                        <p className='text-xl font-light'>Lord Smith starts by reviewing resumes and LinkedIn profiles, weeding out the weak and the unqualified.
                        </p>
                    </div>
                </div>
                <div className='col-span-6 h-[75%] bg-black-650 mt-20 shadow-outline-white'>
                    <div className='p-[12%] border-2 border-pink-650 rotate-2'>
                        <h5 className='text-4xl '>Communication skills </h5>
                        <p className='text-xl font-light'>Lady Jones again conducts a series of screening calls to assess candidates' communications skills and language proficiency..
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-20'>
                <div className='col-span-6 h-[75%] bg-black-650 mt-20 shadow-outline-white'>
                    <div className='p-[12%] border-2 border-pink-650 -rotate-2'>
                        <h5 className='text-4xl '>The Skills Evaluation</h5>
                        <p className='text-xl font-light'>Once a candidate passes the Personal Prostration, Lord of the west Jeff conducts a series of technical tests to assess their fighting skills and abilities.
                        </p>
                    </div>
                </div>
                <div className='col-span-6 h-[75%] bg-black-650 mt-20 shadow-outline-white'>
                    <div className=' p-[14%]  border-2 border-pink-650 rotate-2'>
                        <h5 className='text-4xl '>The Final Interview</h5>
                        <p className='text-xl font-light text-green-650'>Finally, Lord Smith will hold a last interview with the candidate to assess their passion for the startup hustle and their work.


                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SelectionProcess