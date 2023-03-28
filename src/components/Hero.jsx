import React from 'react'
//icons
import { BsWhatsapp } from 'react-icons/bs'
//images
import heroimg from '../assets/oliver-sjostrom-sZKLku0YnFM-unsplash.jpg'


function Hero() {
  return (
    
    <section id='/' className=' w-full lg:h-screen bg-gray-500 relative overflow-hidden pt-[78px]'>
      <div className='relative'>
        <div className=' absolute w-full h-full bg-opacity-80 bg-black flex flex-col justify-center gap-2 p-5 md:justify-start md:items-center md:gap-5 md:pt-32'>
          <p className=' font-bold text-2xl md:text-6xl text-gray-300'>La Rufina <span className='text-green-700 '>Padel</span></p>
          <p className=' font-normal text-gray-300 md:text-2xl max-w-[300px] md:max-w-[440px]'>Canchas profesionales, bar, estacionamiento privado, torneos y más.</p>
          <button className='uppercase font-semibold border py-2 px-3 text-green-900 self-start bg-white hover:bg-gray-200 bg-opacity-100 md:self-center md:px-4 md:py-3 md:text-xl mt-5 flex items-center gap-2'>Reserva tu turno <BsWhatsapp/></button>
        </div>
        <img src={heroimg} alt="" />
      </div>        
    </section>
  )
}

export default Hero