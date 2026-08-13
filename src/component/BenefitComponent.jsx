import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import benefit2 from "../images/Benefit2.png";
import benefit1 from "../images/Benefit1.png";

function BenifitComponent() {
    return (
    // flex column
    <div>
       
    

      {/* grid */}
      <div className='flex flex-col w-full justify-center items-center  bg-[#00031c] '>

        {/* Both side icons and middle has text  */}
            <div className="flex items-center gap-8 mt-10">
            
                {/* Left Glowing Line */}
                <div className="relative flex items-center">
                <div className="w-20 h-0.5 bg-linear-to-r from-transparent via-[#3b82f6] to-[#60a5fa]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#60a5fa] shadow-[0_0_12px_#3b82f6,0_0_20px_#3b82f6]"></div>
                </div>

                {/* Text Header */}
                <h2 className="text-[#a5b4fc] text-2xl font-normal tracking-wide ">
                Benefits
                </h2>

                {/* Right Glowing Line */}
                <div className="relative flex items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#60a5fa] shadow-[0_0_12px_#3b82f6,0_0_20px_#3b82f6]"></div>
                <div className="w-20 h-0.5 bg-linear-to-l from-transparent via-[#3b82f6] to-[#60a5fa]"></div>
                </div>

        </div>

       {/* Heading and subheading */}
             <div className='flex flex-col  items-center border border-black w-200 mb-10 '>
                <h2 className='text-white font-bold  text-4xl my-6'>Your Benefits</h2>
                <p className=' mx-22  text-slate-300 px-2 max-w-150'>Harnessing the power of artificial intelligence to revolutionize industries</p>
                <p className='mx-22  text-slate-300 px-2 max-w-150'>and enhance human experiences.</p>
             </div>

        {/* 1rows, 3columns */}
        <div className='grid lg:grid-cols-3 lg:grid-rows-1  sm:grid-cols-1 gap-1 justify-between  border border-black mx-auto transition-all duration-200'>
            {/* box 1 */}
            <div className='relative overflow-hidden w-100 h-100 md:w-155 md:h-115 lg:w-100 lg:h-100 border border-sky-500  rounded px-7  m-5 transition-all duration-200'>
               <h3 className='text-white font-bold py-5 text-xl'>Innovative Essential Platforms</h3>
               <p className='text-sm font-normal text-slate-300 leading-relaxed'>Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide.</p>
               <img  className='absolute bottom-0 left-0' className='absolute bottom-0 left-0' src={benefit1} alt="" />

            </div>
            {/* box 2 */}
            <div className='relative overflow-hidden text-white w-100 h-100 md:w-155 md:h-115 lg:w-100 lg:h-100 border border-sky-500  rounded px-7  m-5 transition-all duration-200'> 
               <h3 className='font-bold py-5 text-xl'>Effortless Personalization</h3>
               <p className='text-sm font-normal text-slate-300 leading-relaxed'>AI tailors the user experience to each visitor. Imagine a website that remembers preferences, recommends relevant products.</p>
               <img  className='absolute bottom-0 left-0' src={benefit1} alt="" />
            </div>
            {/* box 3 */}
            <div className='relative overflow-hidden text-white w-100 h-100 md:w-155 md:h-115 lg:w-100 lg:h-100 border border-sky-500  rounded px-7 m-5 transition-all duration-200'> 
                 <h3 className='font-bold py-5 text-xl'>Continual Improvement</h3>
                 <p className='text-sm font-normal text-slate-300 leading-relaxed'>AI constantly learns from user interactions and website data. This ongoing process guarantees your website stays relevant, optimized.</p>            
                 <img  className='absolute bottom-0 left-0' src={benefit1} alt="" />
            </div>

        </div>
        {/* 1rows, 2columns */}
        <div className='grid lg:grid-cols-2 lg:grid-rows-1  sm:grid-cols-1  gap-1 justify-between  border border-black mx-auto transition-all duration-200'>
            {/* box 1 */}
            <div className='relative overflow-hidden md:w-155 md:h-115 w-100 h-100 border border-sky-500  rounded px-7   m-5 transition-all duration-200'>
                 <h3 className='text-white font-bold py-5 text-xl'>Continual Improvement</h3>
                 <p className='text-sm font-normal text-slate-300 leading-relaxed'>AI constantly learns from user interactions and website data. This ongoing process guarantees your website stays relevant, optimized.</p>            
                 <img  className='absolute bottom-0 left-0' src={benefit2} alt="" />
           
            </div>
            {/* box 2 */}
            <div className='relative overflow-hidden md:w-155 md:h-115 w-100 h-100 border border-sky-500  rounded px-7  m-5 transition-all duration-200 '> 
                 <h3 className='text-white font-bold py-5 text-xl'>Continual Improvement</h3>
                 <p className='text-sm font-normal text-slate-300 leading-relaxed'>AI constantly learns from user interactions and website data. This ongoing process guarantees your website stays relevant, optimized.</p>            
                 <img className='absolute bottom-0 left-0' src={benefit2} alt="" />
                 
            </div>
        </div>

        {/* button */}
        <div className='mb-10'>
            <button className=' text-white m-4 font-bold py-2 px-6 border text-xl border-sky-500  rounded-3xl flex flex-row gap-2 hover:border-white transition-all duration-200'>Explore More <FiArrowUpRight className='w-8 h-8' /></button>
        </div>
     

      </div>
     
    </div>
  )
}

export default BenifitComponent
