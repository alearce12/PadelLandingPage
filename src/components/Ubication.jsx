import React from 'react'
import {motion} from 'framer-motion'

function Ubication() {
  return (
    <div>
    <section className='mt-20 mb-20' >
    <span id='ubication' className='anchor'></span>
        <div className='flex flex-col items-center gap-5'>
            <motion.p 
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0 }}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            viewport={{once: true}}
            className='text-xl lg:text-2xl xl:text-3xl font-bold p-3 border-b-2 border-green-600 mb-10'>¿Donde nos ubicamos?</motion.p>
            <motion.div
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0 }}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            viewport={{once: true}}
             className='flex flex-col md:gap-10 md:flex-row lg:gap-20 justify-around items-center'>
                <iframe className=' w-[300px] md:w-[450px] lg:w-[600px] xl:w-[800px]' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13629.332377995086!2d-64.3105913!3d-31.349786199999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329dde8a2fbf0b%3A0xaf373267c87005df!2sLa%20Rufina%20Club!5e0!3m2!1ses-419!2sar!4v1679708209466!5m2!1ses-419!2sar" width="400" height="400" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <div className='flex md:flex-col justify-around gap-6 mt-5'>
                    <div>
                    <p className='text-xs md:text-sm'><span className='font-bold'>Dirección</span> <br/>Avenida los Alamos 1111<br/>
                        X5009 Córdoba<br/> 
                        Argentina
                    </p>
                    </div>
                    <div>
                        <p className='font-bold text-xs md:text-sm'>Horarios</p>
                        <p className='text-xs md:text-sm'>Lunes a Domingo de 8hs a 24hs!</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
    </div>
  )
}

export default Ubication