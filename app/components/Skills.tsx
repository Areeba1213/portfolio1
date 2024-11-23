
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
            <h2 className='text-4xl md:text-5xl text-white' >PROFICIENCIES I WORK WITH </h2>
            <p className='text-amber-300 pt-2'>
            I have a diverse skill set that includes front-end development using technologies like Next.js, TypeScript, and TailwindCSS. My focus is on creating clean, responsive, and user-friendly web applications. I enjoy building intuitive interfaces and continuously learning new tools to enhance my development process.
            </p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                  <h2 data-aos="zoom-in-up" >HTML</h2>
                  <h2 data-aos="zoom-in-up" >Next.js</h2>
                  <h2 data-aos="zoom-in-up" >React.js</h2>
                </div>
                <div className='space-y-2'>
                  <h2 data-aos="zoom-in-up" >Typescript</h2>
                  <h2 data-aos="zoom-in-up" >Node.js</h2>
                  <h2 data-aos="zoom-in-up" >CSS</h2>
                  <h2 data-aos="zoom-in-up" >Word Press</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
