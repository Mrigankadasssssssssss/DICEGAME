import React from 'react'

const StartPage = ({toggle}) => {
  return (
    <>
        <div className='flex items-center justify-center  max-w-[1182px] max-h-[522px] mx-auto mt-6'>
            <img src='./images/dices 1.png' width={600} className='h-[550px]'/>
            <div className='w-[528px] h-[188px] flex flex-col gap-9'>
                <h1 className='text-[96px] font-bold leading-[144px] '>DICE GAME</h1>
                
                <button className=' ml-[320px] w-[160px] text-white bg-black h-[85px] py-[10px] px-[15px] rounded-md hover:bg-zinc-700' onClick={toggle}
                >Play Now</button>
            </div>
        </div>
    </>
  )
}

export default StartPage
