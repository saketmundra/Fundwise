import React from 'react'
import {laptop} from '../assets'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={laptop} alt="laptop" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Startups funded on Coinvest have subsequently raised at up to 3x valuation</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Some popular startups!</h1>
                <p className='font-bold md:text-xl'>EyeMyEYE,HelloWeb3,ArtMent,Coinvest,Neuphony,Sustvest,Better,9Unicorns</p>
            </div>
        </div>
    </div>
  )
}

export default Analytics