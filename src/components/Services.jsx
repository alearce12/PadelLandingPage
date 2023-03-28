import React from 'react'
//components
import Banner from './Banner'
import Card from './Card'
//images
import canchasnoche from '../assets/canchasnoche.jpg'
import trofeoimg from '../assets/trofeo2.jpg'
import premios from '../assets/premios.jpg'
import grupo from '../assets/grupo.jpg'
import canchas from '../assets/canchas.jpg'

function Servicios() {
  return (
    <section id='services' >
        <div className=' bg-black w-full h-[100px] text-white items-center flex justify-center uppercase font-semibold text-xl'>
            <span className='w-[80%] text-xl lg:text-2xl xl:text-3xl text-center border-b pb-5'>¿Qué ofrecemos?</span>
        </div>
        <div className='flex flex-col lg:flex-row items-center bg-black md:pt-10 p-5 gap-16 lg:gap-10 lg:px-10 justify-between xl:gap-32 pb-8 md:pb-20 '>
          <div className='bg-black text-white text-left flex flex-col gap-10 flex-1'>
            <p>Nuestro club de pádel ofrece una amplia variedad de servicios para ustedes! Contamos con <span className='font-bold text-green-400 '>4 canchas profesionales</span> para alquilar y disfrutar de una partida con amigos o familiares. </p>
            <p> Además, ofrecemos un <span className='font-bold text-green-400 '>bar donde podrás relajarte y disfrutar</span> de una bebida o un aperitivo después del juego. Disponemos de estacionamiento para que puedas dejar tu vehículo con tranquilidad mientras disfrutas de nuestras instalaciones.</p>
            <p>Finalmente, <span className='font-bold text-green-400 '>organizamos torneos</span> regularmente para aquellos que buscan un desafío adicional y la oportunidad de competir con otros jugadores. ¡Te esperamos en nuestro club para disfrutar del mejor pádel!</p>
          </div>
          <div className='lg:w-1/2 flex-1 bg-black lg:max-w-[557px]'>
            <div>
              <img className='lg:max-h-[371px] rounded-xl ' src={canchasnoche} alt="" />
            </div>
          </div>
        </div>
        <Banner />
        <div className=' relative flex justify-center h-[1430px]  md:h-[940px] xl:h-[450px]'>
          <div className='absolute -top-8 flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center '>
            <div>
              <Card img={trofeoimg} titulo="Organizamos torneos de padel!" parrafo="Compite contra otros jugadores, mejora tus habilidades y diviértete en un ambiente amigable y deportivo. ¡No te lo pierdas!"/>
            </div>
            <div>
              <Card img={premios} titulo="Premios en todas las categorias!" parrafo="¡En nuestro club, todos tienen la oportunidad de ganar! Ofrecemos una amplia variedad de premios en todas las categorías de nuestros torneos de pádel." />
            </div>
            <div>
              <Card img={grupo} titulo="Disfruta con amigos y familiares!" parrafo="¡Ven y disfruta de un día lleno de diversión en nuestro club! Juega al pádel, relájate en nuestro bar o simplemente pasa tiempo con tus seres queridos en un ambiente agradable y acogedor. ¡Te esperamos!"/>
            </div>
          </div>
        </div>
        <img className='pt-10 rounded w-[90%] max-h-[530px] object-cover mx-auto xl:hidden' src={canchas} alt="" />
    </section>
  )
}

export default Servicios