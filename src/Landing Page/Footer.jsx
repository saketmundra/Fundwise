import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='bg-black'>
    <div className='max-w-[1240px] bg-black mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>fundwise</h1>
        <p className='py-4'>Welcome to FundWise, your platform to venture into the world of innovative startups. Invest confidently in promising ideas that have the potential to shape industries and change lives. Our mission is to connect passionate investors like you with visionary entrepreneurs, driving progress and prosperity.</p>
       
        <div className='flex justify-between md:w-[75%] items-center my-6'>
            <FaFacebookSquare title='facebook' size={30}/>
            <FaInstagram title='instagram' size={30}/>
            <FaTwitterSquare title='twitter' size={30}/>
            <FaGithubSquare title='github' size={30}/>
            <FaDribbbleSquare title='dribble' size={30}/>
        </div>
        </div>
        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>Api Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer