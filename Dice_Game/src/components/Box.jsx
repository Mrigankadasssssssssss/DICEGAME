import React,{useState} from 'react'

const Box = ({child, selected, onSelect}) => {
  
  return (
    <div  onClick={() => onSelect(child)} 
    className={`w-[72px] h-[72px] p-[20px] border-solid border-2 border-zinc-600 hover:cursor-pointer ${
      selected === child ? 'bg-black text-white' : 'bg-white text-black'
    }`} >
                <p className='text-center font-semibold'>
                    {child}
                </p>
                
            </div>
  )
}

export default Box
