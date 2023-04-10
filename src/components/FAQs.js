import React from 'react'
import { useState, Fragment } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";


const FAQs = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    return (
        <div className='mx-[8%] tracking-widest'>
            <div className='md:flex items-center justify-center'>
                <div className='flex justify-center'>

                    <h1 className=' md:text-7xl font-bold'>FAQs</h1>
                </div>
                <div className='flex justify-center'>
                    <img src="Sketch-annotation-element-brush-pen-icon-question-sign.svg" alt="Hire any developer of brainy bunch we have some frequently asked questions here" />
                </div>
                <div className='flex justify-center'>
                    <button className='button-pink flex items-center md:mx-10 '>
                        <span className='mx-1 hover:text-black'>Contact Us</span>
                    </button>
                </div>
            </div>
            <div className='mt-6 font-light '>
                <Fragment>
                    <Accordion open={open === 1} animate={customAnimation} className='bg-black-750 border-b-2 border-white'>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                            <img src={open === 1 ? 'game-icons_shard-sword (1).svg' : 'game-icons_shard-sword.svg'} alt="" className='hover:rotate-3' />
                            <p className='tracking-widest ml-6 text-sm md:text-xl'> What kind of programming languages do developers of "The Brainy Bunch" know?</p>
                        </AccordionHeader>
                        <AccordionBody className='p-4'>
                            <p className='text-green-650 tracking-widest  mx-[8.3%] text-sm md:text-xl'>Our developers are skilled in all dialects of programming, from the classical languages to the latest innovations. Their mastery of coding is unmatched, although our developers have experience of diverse programming languages, yet to meet your expectation we also have specialised maestros for each programming language.</p>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} animate={customAnimation} className='bg-black-750 border-b-2 border-white mt-6'>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                            <img src={open === 2 ? 'game-icons_shard-sword (1).svg' : 'game-icons_shard-sword.svg'} alt="" className='hover:rotate-3' />
                            <p className='tracking-widest  ml-6 text-sm md:text-xl' >Can the developers of "The Brainy Bunch" handle any coding challenge?
                            </p>
                        </AccordionHeader>
                        <AccordionBody className='p-4'>
                            <p className='text-green-650 tracking-widest mx-[8.3%] text-sm md:text-xl'>Absolutely! Our developers are prepared for any challenge that comes their way. They are able to turn the tide if faced with defeat, and their knowledge of all programming languages gives them an edge in the battle of coding.</p>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} animate={customAnimation} className='bg-black-750 border-b-2 border-white mt-6'>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            <img src={open === 3 ? 'game-icons_shard-sword (1).svg' : 'game-icons_shard-sword.svg'} alt="" className='hover:rotate-3' />
                            <p className='tracking-widest  ml-6 text-sm md:text-xl'>  What kind of solutions can I expect from "The Brainy Bunch"?
                            </p>
                        </AccordionHeader>
                        <AccordionBody className='p-4'>
                            <p className='text-green-650 tracking-widest  mx-[8.3%] text-sm md:text-xl'>You can expect solutions that befit royalty. Our developers will deliver the most elegant and powerful scripts that are unmatched in the arena of coding.</p>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} animate={customAnimation} className='bg-black-750 border-b-2 border-white mt-6'>
                        <AccordionHeader onClick={() => handleOpen(4)}>
                            <img src={open === 4 ? 'game-icons_shard-sword (1).svg' : 'game-icons_shard-sword.svg'} alt="" className='hover:rotate-3' />
                            <p className='tracking-widest  ml-6 text-sm md:text-xl' > What if one of the developers gets injured during a coding battle?
                            </p>
                        </AccordionHeader>
                        <AccordionBody className='p-4'>
                            <p className='text-green-650 tracking-widest  mx-[8.3%] text-sm md:text-xl'>The remaining members of "The Brainy Bunch" are strong enough to continue the battle and ensure victory for your kingdom. If a switch is necessary, it will be made with ease and at no extra cost to you.</p>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} animate={customAnimation} className='bg-black-750 border-b-2 border-white mt-6'>
                        <AccordionHeader onClick={() => handleOpen(5)}>
                            <img src={open === 5 ? 'game-icons_shard-sword (1).svg' : 'game-icons_shard-sword.svg'} alt="" className='hover:rotate-3' />
                            <p className='tracking-widest ml-6 text-sm md:text-xl '> What makes "The Brainy Bunch" different from other coding teams?
                            </p>
                        </AccordionHeader>
                        <AccordionBody className='p-4'>
                            <p className='text-green-650 tracking-widest mx-[8.3%] text-sm md:text-xl' >Our developers are the valiant knights of the tech kingdom, wielding their mastery of all programming languages with ease. Their pursuit of excellence is unmatched, and their knowledge of all coding languages sets them apart from the rest.</p>
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </div>
        </div>
    )
}

export default FAQs