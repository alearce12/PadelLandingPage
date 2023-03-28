import React from 'react'

function Card({ img , titulo ,parrafo}) {
  return (
    <div className='h-[450px] w-[350px] drop-shadow-2xl border-black bg-gray-100  flex flex-col p-5 rounded  '>
        <div style={{backgroundImage: `url(${img})` , backgroundPositionY: "92%"}} className=' w-full h-2/3 bg-cover bg-no-repeat rounded'>
        </div>
        <div>
            <p className='font-bold text-xl my-2'>{titulo}
            </p>
            <p className='text-center text-gary-900 pt-2'>{parrafo}
            </p>
        </div>
    </div>
  )
}

export default Card