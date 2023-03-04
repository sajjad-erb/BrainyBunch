import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import CodeMonkey from '@/components/CodeMonkey'
import DeveloperSearch from '@/components/DeveloperSearch'
import Army from '@/components/Army'
import RoyalCouncil from '@/components/RoyalCouncil'
import SelectionProcess from '@/components/SelectionProcess'
import HiringProblem from '@/components/HiringProblem'
import CodeStory from '@/components/CodeStory'
import BecomePart from '@/components/BecomePart'
import TheKing from '@/components/TheKing'
import Testimonial from '@/components/Testimonial'
import JoinOurCommunity from '@/components/JoinOurCommunity'
import PaymentPlans from '@/components/PaymentPlans'
import NinjaCode from '@/components/NinjaCode'
import FAQs from '@/components/FAQs'
import WeeklyProgress from '@/components/WeeklyProgress'
import Footer from '@/components/Footer'
import Form from '@/components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
      <section>
        <Form />
      </section>
      <section className=' mt-8 relative'><Banner />
        <img src="banner-image.svg" alt="developer coding with a laptop keyboard" className='hidden lg:block absolute right-0
        bottom-0 h-[90%]'  />
      </section>

      <section className='md:mt-44 mt-16  md:w-[70]'><CodeMonkey /></section>

      <section className='md:mt-44 mt-16 '><DeveloperSearch /></section>

      <section>
        <section className='md:mt-44 mt-16'><Army /></section>
        <div className='flex justify-between relative lg:mt-44'>
          <div className="slide-right z-10 hidden xl:block">
            <div className='flex justify-center items-center p-3 '>
              <img src="/techs/AWS.svg" alt="" className='h-[120px]' />
              <img src="/techs/language1.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/language2.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/language3.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/language4.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/language5.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/language6.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/language7.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/language8.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/ROR.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/flutter.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/Android.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/tailwind.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/python.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/vue-js.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/css.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/Django.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/react-native.svg" alt="" className='h-[120px] mx-14' />
              <img src="/techs/language9.svg" alt="" className='h-[120px]' />
            </div>
          </div>
          <img src="castle-updated1.svg" alt="Castle of multiple programming languages React Angular Ruby on Rails
        java javascript typescript c++ c# and manymore" className='w-[500px] absolute  bottom-[-34%] right-[-11%]  hidden xl:block  2xl:hidden' />
        </div>
      </section>

      <section className='md:mt-44 mt-16'><RoyalCouncil /></section>

      <section className='flames-bg md:h-[1700px] md:mt-32 mt-16'>
        <section className='md:mt-32'><SelectionProcess /></section>
      </section>

      <section className='md:mt-44 mt-16'><HiringProblem /></section>

      <section className='md:mt-44 mt-16'><CodeStory /></section>

      <section className='md:mt-32 mt-8 '><BecomePart /></section>

      <section className='md:mt-44 mt-8 '><TheKing /></section>

      <section className='md:mt-44 mt-16'><Testimonial /></section>

      <section className='md:mt-32 mt-8 '><JoinOurCommunity /></section>

      <section className='md:mt-44 mt-16'><WeeklyProgress /></section>

      <section className='md:mt-44 mt-16'><PaymentPlans /></section>

      <section className='md:mt-44 mt-16'><NinjaCode /></section>

      <section className='flames-bg md:h-[1700px] mt-32'>
        <section className='mt-44'><FAQs /></section>
      </section>

      <footer><Footer /></footer>


    </>
  )
}
