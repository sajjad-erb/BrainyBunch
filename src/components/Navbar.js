import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [text, setText] = useState("Hire Brains")
  const [form, setForm] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.asPath == "/hireForm") {
      setText("Back")
      setForm(true)
    }
  }, [])

  const handleClick = e => {
    e.preventDefault()
    if (form) {
      router.push('/')
      return
    }
    router.push('/hireForm')
  }

  return (
    <div className='flex justify-between gap-20 items-center mx-[8%]'>
      <div className='flex  lg:w-auto justify-center items-center'>
        <div>
          <img src="logo.svg"
            alt="logo of brainy bunch"
          />

        </div>
        <div>
          <img
            src="BRAINY BUNCH.svg"
            alt="text of brainy bunch"
            className='mx-6 h-5'
          />

        </div>
      </div>
      <div className='flex md:w-[100%] lg:w-auto justify-center gap-2'>
        <div className='hidden md:flex lg:block'>
          <button type="button" onClick={handleClick} className='button-pink flex items-center  hover:rotate-1 '>
            <img src="twemoji_brain.svg" alt="Hire a software developer" />
            <span className={`mx-1 ${form ? "px-2 mx-5" : ""} hover:text-black`}>{text}</span>
          </button>
        </div>
        <div>
          <div className='hidden md:flex lg:block'>
            <button className='button-green flex items-center hover:-rotate-1 '>
              <img src="game-icons_swords-emblem.svg" alt="Join us to work for top clients" />
              <span className='hover:text-green-650 mx-1'>Join our forces</span>
            </button>
          </div>
          <div>
            <img src="game-icons_sword-array.svg" alt="" className='rotate-[135deg] block md:hidden' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
