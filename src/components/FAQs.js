import React, { useState } from 'react'
import { CSSTransition } from "react-transition-group";


const FAQs = () => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    return (
        <div className='mx-[8%] tracking-widest'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <h1 className='text-7xl font-bold'>FAQs</h1>
                    <img src="Sketch-annotation-element-brush-pen-icon-question-sign.svg" alt="Hire any developer of brainy bunch we have some frequently asked questions here" />
                </div>
                <div>
                    <button className='button-pink flex items-center mx-10 '>
                        <span className='mx-1 hover:text-black'>Contact Us</span>
                    </button>
                </div>
            </div>
            <div className='mt-6 font-light'>
                <div className='flex flex-col bg-black-650 border-b-2 border-white'>
                    <div className='flex items-center' onClick={toggleExpanded}>
                        <img
                            src={expanded ? "game-icons_shard-sword (1).svg" : "game-icons_shard-sword.svg"}
                            alt=""
                            className={expanded ? 'mx-6 cursor-pointer hover:-rotate-6 mt-6' : 'mx-6 cursor-pointer hover:rotate-6'}
                        />
                        <p className='mx-6'>
                            What kind of programming languages do developers of "The Brainy Bunch" know?
                        </p>
                    </div>
                    {expanded && (
                        <p className='mx-6 my-4 text-green-650'>
                            Absolutely! Our developers are prepared for any challenge that comes their way. They are able to turn the tide if faced with defeat, and their knowledge of all programming languages gives them an edge in the battle of coding.
                        </p>
                    )}
                </div>
                <div className='flex items-center bg-black-650 border-b-2 border-white mt-6'>
                    <img src="game-icons_shard-sword.svg" alt="" className='mx-6 cursor-pointer hover:rotate-6' />
                    <p className='mx-6'>Can the developers of "The Brainy Bunch" handle any coding challenge?</p>
                </div>
                <div className='flex items-center bg-black-650 border-b-2 border-white mt-6'>
                    <img src="game-icons_shard-sword.svg" alt="" className='mx-6 cursor-pointer hover:rotate-6' />
                    <p className='mx-6'>What if one of the developers gets injured during a coding battle?</p>
                </div>
                <div className='flex items-center bg-black-650 border-b-2 border-white mt-6'>
                    <img src="game-icons_shard-sword.svg" alt="" className='mx-6 cursor-pointer hover:rotate-6' />
                    <p className='mx-6'>What kind of solutions can I expect from "The Brainy Bunch"?</p>
                </div>
                <div className='flex items-center bg-black-650 border-b-2 border-white mt-6'>
                    <img src="game-icons_shard-sword.svg" alt="" className='mx-6 cursor-pointer hover:rotate-6' />
                    <p className='mx-6'>What makes "The Brainy Bunch" different from other coding teams? </p>
                </div>
            </div>
        </div>
    )
}

export default FAQs