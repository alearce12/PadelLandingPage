import React from 'react'

function Logo( { bgcolor }) {
  return (
    <div className='absolute top-2 left-2 flex cursor-pointer'>
        <p className='uppercase text-sm font-semibold leading-none flex flex-col w-[74px] '>la rufina 
            <br />
            <span className='uppercase text-2xl font-bold'>padel</span>
            <span className=' text-right font-normal text-xs '>club</span>
        </p>
        <div className=' h-[60px] w-[60px] ml-1  bg-green-700 rounded-br-full relative overflow-hidden'>
            <div style={{borderColor: `${bgcolor}`}} className=' h-[40px] w-[30px] absolute -bottom-1 -left-1 rounded-tr-full rounded-br-xl border-t-4 border-r-4 '></div>
            <div style={{borderColor: `${bgcolor}`}} className=' h-[40px] w-[30px] absolute -top-1 -right-[3px] rounded-bl-full  border-b-4 rounded-tl-none border-l-4 -rotate-6 '></div>
        </div>
    </div>
  )
}

export default Logo