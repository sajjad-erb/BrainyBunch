import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'


const hire_knight = () => {
  return (
    <>
    <Head>
      <title>Create Next App</title>
      <title>Hire best developers for your start ups</title>
      <meta name="description" content="Welcome to Brainy Bunch! We are a group of highly skilled technology developers ready to provide you with the best talent. Get ready to say goodbye to mediocrity and experience the peak of excellence." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Brainy Bunch - The Best Developers for Your Project" />
      <meta property="og:description" content="Find the best developers for your project at Brainy Bunch. We offer top talent in multiple languages for all your tech needs." />
      <link rel="icon" href="logo.svg" />
  
    </Head>
    <nav className='mt-10 '>
      <Navbar />
    </nav>

    <section></section>

  </>
  )
}

export default hire_knight