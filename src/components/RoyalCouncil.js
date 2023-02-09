import React from 'react'

const RoyalCouncil = () => {
    return (
        <div className='mx-[8%]'>
            <h1 className='text-7xl'>Royal council</h1>
            <p className='text-xl mt-6 w-[60%]'>Allow us to present to you, the notable 'Brainy Bunch' council members. Their expertise and skills shall speak for themselves.
            </p>
            <div className='grid grid-cols-12 gap-24 mt-6 items-start'>
                <div className='col-span-4'>
                    <img src="" alt="" className='object-cover' />
                    <p className='text-xl font-light text-center mt-6 '><span className='text-green-650'>Lord Smith</span>, our lead developer recruiter. He boasts an exceptional talent for identifying top-notch talent and a unique ability to detect false resumes from a distance by his sense of smell.</p>
                </div>
                <div className='col-span-4'>
                    <img src="" alt="" className='object-cover' />
                    <p className='text-xl font-light text-center mt-6'><span className='text-green-650'>Lady Jones</span>, our head of developer training. With her no-nonsense attitude and strict code review process, she's the master of developer improvement</p>
                </div>
                <div className='col-span-4'>
                    <p className='text-xl font-light text-center mt-6'><span className='text-green-650'>Skyhunter </span>soars through the sky, its eyes trained on the ground below, searching for individuals with exceptional skills and abilities. </p>
                </div>
            </div>
        </div>
    )
}

export default RoyalCouncil