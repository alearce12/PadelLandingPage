import React from 'react'
import { useForm } from 'react-hook-form'
//images
import canchas from '../assets/canchas.jpg'
import belasteguin from '../assets/belasteguin.png'

function Contact() {

    const {register, formState: { errors }, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <section id='contact' >
        <div className=' flex bg-white justify-center items-center py-10 '>
            <form className='bg-white rounded w-[80%] max-w-[532px] xl:max-w-none flex px-2 py-5 shadow-2xl md:py-10' onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full flex flex-col justify-center items-center gap-3 max-w-[532px]'>
                    <h2 className='font-bold text-2xl mb-4 text-green-800 xl:text-4xl '>Contáctenos!</h2>
                    <div className='flex flex-col gap-2 w-[90%]'>
                        <div className='group'>
                            <label className='block text-gray-500 text-sm group-focus-within:text-xs group-focus-within:text-green-700 transition-all mb-1'>Nombre</label>
                            <input className='bg-transparent border-b-2 w-full focus:outline-none focus:border-b-green-700' type="text" {...register('nombre',{
                                required: true
                            })}/>
                            {errors.nombre?.type === 'required' && <span className='text-xs text-red-500 py-1'>El campo Nombre es requerido</span> }
                        </div>
                        <div className='group'>
                            <label className='block text-gray-500 text-sm mb-1 group-focus-within:text-xs group-focus-within:text-green-700 transition-all'>Teléfono</label>
                            <input className='bg-transparent border-b-2 w-full focus:outline-none focus:border-b-green-700' type="tel" {...register('telefono', {
                                required: true,
                                pattern: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
                            })} />
                            {errors.telefono?.type === 'required' && <p className='text-xs text-red-500 py-1'>El campo Teléfono es requerido</p> }
                            {errors.telefono?.type === 'pattern' && <span className='text-xs text-red-500 py-1'>El formato de número ingresado es incorrecto.</span> }
                        </div>
                        <div className='group'>
                            <label className='block text-gray-500 text-sm mb-1 group-focus-within:text-xs group-focus-within:text-green-700 transition-all'>Asunto</label>
                            <input className='bg-transparent border-b-2 w-full focus:outline-none focus:border-b-green-700' type="text" {...register('asunto')} />
                        </div>
                        <div className='group'>
                            <label className='block text-gray-500 text-sm mb-1 group-focus-within:text-xs group-focus-within:text-green-700 transition-all'>Mensaje</label>
                            <textarea className='border w-full bg-transparent focus:outline-none focus:border-green-700' name="" id="" cols="30" rows="6" {...register('mensaje',{
                                required: true
                            })}></textarea>
                            {errors.mensaje?.type === 'required' && <span className='text-xs text-red-500 py-1'>El campo Mensaje es requerido</span> }
                        </div>
                    </div>
                    <input type="submit" className='border w-[90%] p-2 rounded-md bg-green-700 text-white hover:bg-green-900 hover:cursor-pointer' />
                </div>
                <div style={{backgroundImage:`url(${canchas})`}} className='hidden xl:flex w-full bg-cover bg-center rounded justify-center items-end'>
                </div>
            </form>
        </div>
        <img src={belasteguin} alt="" className='h-[250px] mx-auto'/>
    </section>
  )
}

export default Contact