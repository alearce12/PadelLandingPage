import React, { useState } from 'react'
import { Link } from 'react-scroll'
//icons
import { FiMenu, FiX } from 'react-icons/fi'
//components
import Logo from './Logo'

function Header() {
    const [isActive, setIsActive] = useState(false)

  return (
    <header className=' bg-white fixed top-0 right-0 left-0 z-40 shadow-xl '>
        <nav className=' flex p-2 md:ml-5 items-center w-full relative h-[78px]'>
            <Link to="/" spy={true} smooth={true} offset={50} duration={500}><Logo bgcolor='white'/></Link> 
            <div className='absolute top-6 right-5 text-3xl hover:cursor-pointer md:hidden' onClick={() => { setIsActive(!isActive)}}>
                { isActive? <FiX/> : <FiMenu/> }
            </div>
            <div className={`absolute bg-white top-[78px] transition-all duration-700 w-full ${isActive? 'right-0' : ' lg:hidden -right-[800px]'}  bottom-0 h-screen bg-opacity-0 flex `}>
            <div className='bg-transparent w-1/3 h-full' onClick={() => setIsActive(!isActive)}></div>
            <div className=' p-5 bg-white h-screen w-2/3 flex justify-center pt-10'>
                <ul className=' flex flex-col gap-10 w-full'>
                    <li className='text-black font-semibold hover:text-green-700 w-full border-b-2 text-center p-3 hover:cursor-pointer'><Link to="/" spy={true} smooth={true} offset={50} duration={500} onClick={() => { setIsActive(!isActive) }}>INICIO</Link></li>
                    <li className='text-black font-semibold hover:text-green-700 w-full border-b-2 text-center p-3 hover:cursor-pointer'><Link to="services" spy={true} smooth={true} offset={-100} duration={500} onClick={() => { setIsActive(!isActive) }}>SERVICIOS</Link></li>
                    <li className='text-black font-semibold hover:text-green-700 w-full border-b-2 text-center p-3 hover:cursor-pointer'><Link to="ubication" spy={true} smooth={true} offset={-100} duration={500} onClick={() => { setIsActive(!isActive) }}>UBICACION</Link></li>
                    <li className='text-black font-semibold hover:text-green-700 w-full border-b-2 text-center p-3 hover:cursor-pointer'><Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={() => { setIsActive(!isActive) }}>CONTACTO</Link></li>
                </ul>
            </div>
            </div>
            <div className='mx-auto hidden md:block'>
                <ul className=' flex gap-10 text-md pr-10'>
                    <li className='text-black font-semibold hover:text-green-700 hover:cursor-pointer '><Link className='hover:border-b-2 hover:border-b-green-700'to="/" spy={true} smooth={true} offset={50} duration={500}>INICIO</Link></li>
                    <li className='text-black font-semibold hover:text-green-700 hover:cursor-pointer '><Link className='hover:border-b-2 hover:border-b-green-700' to="services" spy={true} smooth={true} offset={-100} duration={500}>SERVICIOS</Link></li>
                    <li className='text-black font-semibold hover:text-green-700 hover:cursor-pointer '><Link className='hover:border-b-2 hover:border-b-green-700' to="ubication" spy={true} smooth={true} offset={-100} duration={500}>UBICACION</Link></li>
                    <li className='text-black font-semibold hover:text-green-700 hover:cursor-pointer '><Link className='hover:border-b-2 hover:border-b-green-700' to="contact" spy={true} smooth={true} offset={-100} duration={500}>CONTACTO</Link></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header