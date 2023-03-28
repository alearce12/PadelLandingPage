import React from 'react'
//icons
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { FaSearchLocation } from 'react-icons/fa'
//components
import Logo from './Logo'

function Footer() {
  return (
    <footer>
      <div className='bg-black h-[300px] p-4 flex justify-between item lg:justify-around'>
        <div className='flex w-[350px]'>
            <div className='relative text-white '>
              <Logo bgcolor='black'/>
            </div>
            <div className='pt-24'>
              <p className='text-gray-300 text-xs'>Somos un club de padel de alta calidad dedicado a ofrecer una experiencia de juego excepcional a nuestros miembros. Con instalaciones de primera clase y un personal altamente capacitado. ¡Únete a nuestra comunidad y disfruta del mejor padel en La Rufina Padel!
              </p>
          </div>
        </div>
        <div className='w-[400px] pl-8 flex flex-col gap-4 text-sm'>
          <p className='text-white font-bold '>Redes sociales</p>
          <div className='text-green-600 flex gap-2 items-center'>
            <BsInstagram size={20} />
            <a href="https://www.instagram.com/larufinapadelclub/" target={'_blank'}>Seguinos en Instagram!</a>
          </div>
          <p className='font-bold text-white'>Contacto</p>
          <div className='text-green-600 flex gap-2'>
            <BsWhatsapp size={20}/>
            <span>0351 746-8080</span>
          </div>
          <p className='font-bold text-white'>Direccion</p>
          <div className='flex gap-2'> 
            <div>
              <FaSearchLocation size={20} color='green'/>
            </div>
            <div className='flex flex-col text-green-600'>
              <span>Avenida los Alamos</span>
              <span>X5009 Córdoba</span>
              <span>Argentina</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-green-900 h-[50px] text-sm'>
        <div className='flex items-center justify-center h-full'>
          &copy;2023 <span className='font-bold ml-1'>La Rufina Padel</span>. Todos los Derechos Reservados.
        </div>
      </div>
    </footer>
    
  )
}

export default Footer  