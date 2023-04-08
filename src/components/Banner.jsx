import React from 'react'
//icons
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import greenbg from '../assets/dark-green-739780.jpg'

function Banner() {
  return (
    <div style={{backgroundImage:`url(${greenbg})`}} className=' h-[150px] flex flex-col items-center justify-start pt-4 gap-3 bg-no-repeat bg-cover bg-center '>
        <div className='text-white text-sm md:text-xl'>Seguinos en Instagram o contactate por WhatsApp !</div>
        <div className='flex justify-around w-full'>
            <div className=' bg-black w-[180px] p-1 rounded-xl flex justify-around items-center cursor-pointer'>
              <div className='flex gap-2 h-full items-center'>
                <BsInstagram className=' text-xl md:text-2xl text-green-500'/>
                <div className='w-[0.5px] h-full bg-white'>
              </div>
              </div>
                <a href="https://www.instagram.com/larufinapadelclub/" target={'_blank'} className='font-semibold -ml-3 md:ml-0 text-xs md:text-sm text-green-500'>
                    @larufinapadelclub
                </a>
            </div>
            <div className=' bg-black w-[180px] p-1 rounded-xl flex justify-around items-center cursor-pointer'>
              <div className='flex gap-2 h-full items-center'>
                <BsWhatsapp className=' text-xl md:text-2xl text-green-500 md:ml-[6px]'/>
                <div className='w-[0.5px] h-full bg-white '></div>
              </div>
              <a href="#" className='font-semibold -ml-3 md:ml-0 text-xs md:text-sm text-green-500'>+54 9 3517468080</a>
            </div>
        </div>
    </div>
  )
}

export default Banner