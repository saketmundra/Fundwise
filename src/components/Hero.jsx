import React from 'react'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
const Hero = () => {
const textRef = useRef()
  useEffect(()=>{
    init(textRef.current, { 
      showCursor:true,
      backDelay:2500,
      backSpeed:60,
      strings: ['finance','technology','web3','healthcare','education','agriculture'] })
  },[])
  return (
    <div className='text-white'>
        <div className='w-full h-screen mx-auto text-center flex flex-col justify-center bg-black'>
            <p className='text-[#00df9a] font-bold p-2 text-4xl'>INVEST SECURELY IN STARTUPS</p>
            <h1 className='md:text-7xl font-bold md:py-6'>Grow your wealth with startups!</h1>
            <div>
                <p className='md:text-4xl font-bold py-4'>Fast & flexible investment in <span ref={textRef}></span>. </p>
            </div>
            <p className='md:text-3xl text-xl font-bold text-gray-500 '>Monitor your investments in varied early-stage startups in exchnage of bitcoin, ethereum etc</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero