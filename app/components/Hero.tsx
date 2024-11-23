import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id='Hero' className='min-h-screen bg-no-repeat bg-[url(/my_pic.png)]   bg-rounded-full'
     style={{backgroundSize:"25%" , backgroundPosition: "left 100px top 200px" }}
    
    >
     <Navbar /> 
     <div className='container grid lg:grid cols-2 h-[calc(100vh-60px)] '>
      <div className='hidden lg:block'></div>
      <div className='text-[80px] sm:text-[100px] font-bold  flex justify-center items-center lg:text-end leading-tight mt-5'>
        <div>
          <p data-aos="zoom-in-up">I'm</p>
          <p data-aos="zoom-in-up">Areeba</p>
          <p data-aos="zoom-in-up">Shahid</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Hero


