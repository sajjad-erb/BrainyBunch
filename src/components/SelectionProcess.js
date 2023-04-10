import React from 'react'

const SelectionProcess = () => {
    return (
        <div className='mx-[8%] tracking-widest'>
            <h1 className='text-4xl lg:text-7xl md:w-[70%] font-bold text-center md:text-left'> The Imperial <span className='brushed-background'> Selection Process </span> of our Knights </h1>
            <div className='grid md:grid-cols-2 gap-x-40 gap-y-16'>
                <div className='mt-24 md:mt-24'>
                    <div className='h-100 bg-black-650 shadow-outline-white '>
                        <div className=' p-[10%] border-2 border-green-650  -rotate-1 hover:rotate-1 '>
                            <div className='flex justify-end'>
                                <h1 className='text-5xl text-green-650'>01</h1>
                            </div>
                            <h5 className='text-xl md:text-3xl double-brush-effect'>The Resume Evaluation</h5>
                            <p className='text-sm md:text-xl font-light'>Lord Smith starts by reviewing resumes and LinkedIn profiles, weeding out the weak and the unqualified.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='md:mt-24'>
                    <div className='h-100 bg-black-650 shadow-outline-white '>
                        <div className=' p-[10%] border-2 border-pink-650  rotate-1 hover:-rotate-1'>
                            <div className='flex justify-end'>
                                <h1 className='text-5xl text-pink-650'>02</h1>
                            </div>
                            <h5 className='text-xl md:text-3xl double-brush-effect'>Communication skills </h5>
                            <p className='text-sm md:text-xl font-light'>Lady Jones again conducts a series of screening calls to assess candidates' communications skills and language proficiency.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='h-100 bg-black-650 shadow-outline-white '>
                    <div className=' p-[10%] border-2 border-pink-650  -rotate-1 hover:rotate-1'>
                        <div className='flex justify-end'>
                            <h1 className='text-5xl text-pink-650'>03</h1>
                        </div>
                        <h5 className='text-xl md:text-3xl double-brush-effect'>The Skills Evaluation</h5>
                        <p className='text-sm md:text-xl font-light'>Once a candidate passes the Personal Prostration, Lord of the west Jeff conducts a series of technical tests to assess their fighting skills and abilities.
                        </p>
                    </div>
                </div>

                <div className='h-100 bg-black-650 shadow-outline-white '>
                    <div className=' p-8 border-2 border-green-650  rotate-1 hover:-rotate-1'>
                        <div className='flex justify-end'>
                            <h1 className='text-5xl text-green-650'>04</h1>
                        </div>
                        <h5 className='text-xl md:text-3xl double-brush-effect'>The Final Interview</h5>
                        <p className='text-sm md:text-xl font-light'>Finally, Lord Smith will hold a last interview with the candidate to assess their passion and motivation for the startup hustle and their work.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
    

    )
}

export default SelectionProcess