import React from 'react'
import Grid_image from '../images/Grid_image.png'
import Circle_image from '../images/Circle_image.png'
import MyFinance_image from '../images/MyFinance_image.png'
import Dashboard_image from '../images/Dashboard_image.png'


function FeaturesComponent() {
  return (
    
    <div>
        <div className='flex flex-col justify-center items-center w-full bg-[#00031c]'>
             {/* Top feature section block */} 

              {/* Both side icons and middle has text  */}
                     <div className="flex items-center gap-8 mt-10">

                        {/* Left Glowing Line */}
                        <div className="relative flex items-center">
                            <div className="w-20 h-0.5 bg-linear-to-r from-transparent via-[#3b82f6] to-[#60a5fa]"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#60a5fa] shadow-[0_0_12px_#3b82f6,0_0_20px_#3b82f6]"></div>
                        </div>

                        {/* Text Header */}
                        <h2 className="text-[#a5b4fc] text-2xl font-normal tracking-wide ">
                           Features
                        </h2>

                        {/* Right Glowing Line */}
                        <div className="relative flex items-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#60a5fa] shadow-[0_0_12px_#3b82f6,0_0_20px_#3b82f6]"></div>
                            <div className="w-20 h-0.5 bg-linear-to-l from-transparent via-[#3b82f6] to-[#60a5fa]"></div>
                        </div>

                    </div> 

                    {/* Heading and subheading */}
                    <div className='flex flex-col justify-center items-center'>     
                       
                            <h2 className='text-white mx-auto pt-6 pb-2 font-bold text-4xl  max-w-100'>Our Client Love to use</h2>
                            <h2 className='text-white mx-auto pb-6 font-bold text-4xl  max-w-100'>Our Products.</h2>
                            <p className='mx-auto  text-slate-300 px-2 max-w-150'>Free Up Your Time to Focus on What Matters Most</p>

                    </div>

                    {/* grid */}
                    <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 justify-between gap-1  mt-5' >
                      
                       {/* box 1 */}
                            <div className='relative overflow-hidden w-100 h-120 md:w-72 md:h-114 lg:w-155 lg:h-155  border border-sky-500  rounded px-7  m-5 transition-all duration-200'>
                            <div className="absolute top-0 left-0 w-full lg:h-55 overflow-hidden ">
                              <img className='absolute top-0 left-0' src={Grid_image} alt="" />
                              <div className='flex flex-col lg:flex-row  justify-between gap-2'>
                                <div className='flex flex-row items-center justify-center mt-1 ml-1  '>
                                    <img className=' w-20 h-20 lg:w-50 lg:h-55' src={Circle_image} alt="" />
                                </div>
                                <div className=' md:w-72 lg:w-100 z-1 px-4 border  mt-2 mx-auto'>
                                    <h2 className='text-white font-bold py-5 w-70 px-1'>Intelligent Research Assistant</h2>
                                    <p className='text-slate-300 text-sm px-1'>Feed the AI your topic and keywords, and watch it gather relevant information from across the web.</p>
                                </div>

                              </div>
                               
                            </div>
                            <div >
                              <img className='  absolute bottom-0 left-0 h-46 w-full lg:h-110'src={MyFinance_image} alt="" />
                            </div>

                        </div>
                      

                       {/* box 2 */}
                        <div className='relative overflow-hidden w-100 h-120 md:w-72 md:h-114 lg:w-155 lg:h-155  border border-sky-500  rounded px-7  m-5 transition-all duration-200'>
                            <div className="absolute top-0 left-0 w-full lg:h-55 overflow-hidden ">
                              <img className='absolute top-0 left-0' src={Grid_image} alt="" />
                              <div className='flex flex-col lg:flex-row  justify-between gap-2'>
                                <div className='flex flex-row items-center justify-center mt-1 ml-1  '>
                                    <img className=' w-20 h-20 lg:w-50 lg:h-55' src={Circle_image} alt="" />
                                </div>
                                <div className=' md:w-72 lg:w-100 z-1 px-4 mt-2 mx-auto'>
                                    <h2 className='text-white font-bold py-5 w-70 px-1'>Intelligent Research Assistant</h2>
                                    <p className='text-slate-300 text-sm px-1'>Feed the AI your topic and keywords, and watch it gather relevant information from across the web.</p>
                                </div>

                              </div>
                               
                            </div>
                            <div >
                              <img className='  absolute bottom-0 left-0 h-46 w-full lg:h-110'src={MyFinance_image} alt="" />
                            </div>

                        </div>

                        <div>

                        </div>

                    </div>


                     {/* Banner box */}
                    <div className='w-100 h-120 md:w-155 md:h-115 lg:w-7xl lg:h-155 overflow-hidden border border-sky-500  rounded px-7  m-5 transition-all duration-200'>

                      <div className='flex w-full relative h-50 md:h-57 lg:h-62   '>
                         <div className='relative lg:w-200 lg:h-62 mx-auto'>
                             <img className='absolute top-0 left-0' src={Grid_image} alt="" />
                             <div className='flex flex-col items-center '>
                              <img className='w-25 h-25 lg:w-38 lg:h-38 mt-5' src={Circle_image} alt="" />
                              <h3 className='text-white text-xl font-bold py-5  px-1 mx-auto'>Real-time Fact-Checking and Plagiarism Detection</h3>
                              <p className='text-slate-300  px-1 mx-auto'>Integrate with reliable fact-checking databases</p>

                             </div>

                          

                         </div>

                      </div>

                      <div className='w-full relative  h-50 md:h-57 lg:h-93  mt-20 md:mt-0 lg:mt-0'>
                        <img className='absolute bottom-0 right-0  h-50 md:h-57 md:w-155 lg:w-280 lg:h-80  lg:mx-12' src={Dashboard_image} alt="" />
                         
                      </div>
                    </div>

                    {/* Demo button */}

                    <div className='flex   overflow-hidden relative w-155 lg:w-7xl h-35 border border-sky-500  rounded px-7 mx-5 my-20'>
                      <img className=' absolute top-0 left-0' src={Grid_image} alt="" />
                      <div className='w-full  flex flex-col lg:flex-row justify-between items-center gap-1 '>

                        <div className='w-100 text-slate-300 mt-4 lg:mt-0'>Stop writer's block and generate fresh content ideas with our AI assistant. Take your content to next level!</div>
                        
                         <button className=' text-white m-4 font-bold py-2 px-6 border text-xl border-sky-500  rounded-3xl flex flex-row gap-2 hover:border-white transition-all duration-200'>Get a Demo</button>
                      </div>

                    </div>
            
        </div>
      
    </div>
  )
}


export default FeaturesComponent
