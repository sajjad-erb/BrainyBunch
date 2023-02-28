import React from 'react'

const RoyalCouncil = () => {
    return (
        <div className='mx-[8%]'>
            <h1 className='md:text-7xl double-brush-effect text-center md:text-left text-4xl '>Royal council</h1>
            <p className='text-sm md:text-xl mt-6 lg:w-[60%] font-light text-center md:text-left'>Allow us to present to you, the notable 'Brainy Bunch' council members. Their expertise and skills shall speak for themselves.
            </p>
            <div className='grid  md:grid-cols-3 lg:grid-cols-3 gap-24  items-center mt-24'>
                <div className=''>
                    <div className='relative'>
                        <img src="lord-smith council.svg" alt="interviews for hiring web developer" className='h-[330px]'  />
                        <img src="behold.svg" alt="Behold!!!" className='absolute top-0 left-0 h-[20%]' />
                    </div>

                    <p className='text-sm md:text-xl font-light text-center mt-6 '><span className='text-green-650'>Lord Smith</span>, our lead developer recruiter. He boasts an exceptional talent for identifying top-notch talent and a unique ability to detect false resumes from a distance by his sense of smell.</p>
                </div>
                <div className=' '>
                    <div className='relative'>
                        <img src="lady-jones council.svg" alt="communication skills check"  className='height-lady' />
                        <img src="choosen-one council.svg" alt="Communication assessment for developers" className='absolute top-0 right-0 h-[20%]' />
                    </div>
                    <p className='text-sm md:text-xl font-light text-center mt-6'><span className='text-green-650 '>Lady Jones</span>, our head of developer training. With her no-nonsense attitude and strict code review process, she's the master of developer improvement</p>
                </div>
                <div className=' '>
                    <div className='relative'>
                        <img src="dragon council.svg" alt="" className='height-dragon' />
                        <img src="haaaa.svg" alt="Dragon shouting HAAA He finds every field of software engineers" className='absolute top-0 right-30' />
                    </div>
                    <p className='text-sm md:text-xl font-light text-center mt-6'><span className='text-green-650'>Skyhunter </span>soars through the sky, its eyes trained on the ground below, searching for individuals with exceptional skills and abilities. </p>
                </div>
            </div>
        </div>
    )
}

export default RoyalCouncil