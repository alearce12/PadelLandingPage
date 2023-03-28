import React from 'react'
//icons
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import greenbg from '../assets/dark-green-739780.jpg'

function Banner() {
  return (
    <div style={{backgroundImage:`url(${greenbg})`}} className=' h-[150px] flex flex-col items-center justify-start pt-4 gap-3 bg-no-repeat bg-cover bg-center '>
        <div className='text-white md:text-xl'>Seguinos en Instagram o contactate por WhatsApp !</div>
        <div className='flex justify-around w-full'>
            <div className=' bg-black w-[180px] p-1 rounded-xl flex justify-around items-center relative cursor-pointer'>
                <BsInstagram className=' text-2xl text-green-500'/>
                <div className='w-[0.5px] h-full bg-white absolute left-10'>
                </div>
                <a href="https://www.instagram.com/larufinapadelclub/" target={'_blank'} className='font-semibold text-sm text-green-500'>
                    @larufinapadelclub
                </a>
            </div>
            <div className=' bg-black w-[180px] p-1 rounded-xl flex justify-between items-center relative cursor-pointer'><BsWhatsapp className=' text-2xl text-green-500 ml-[6px]'/><div className='w-[1px] h-full bg-white absolute left-10'></div><a href="#" className='font-semibold text-sm text-green-500 mr-2'>+54 9 3517468080</a></div>
        </div>
    </div>
  )
}

export default Banner