import React, { useState } from 'react'

const RollingDice = ({currentDice,handle,reset}) => {

    const [showRules, setShowRules] = useState(false)

    
  return (
    <div className='flex flex-col items-center justify-center mt-28'>
       <div className='flex flex-col items-center'>

        <img src={`/images/dices/dice_${currentDice}.png`} width={200} height={200} className='cursor-pointer' onClick={handle}/>
        <h3 >Click on Dice To Roll</h3>
       </div> 
      <button className='w-[160px] h-[45px] mt-4 rounded-md border-solid border-2 border-zinc-700 font-semibold hover:text-white hover:bg-black hover:font-semibold' onClick={reset}>Reset Score</button>
      <button className='w-[160px] text-white bg-black h-[45px] mt-4 rounded-md hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-zinc-700 hover:font-semibold font-semibold'
      onClick={()=>setShowRules((prev)=>!prev)}
      >{showRules?"Show":"Hide"} Rules</button>
      
      {!showRules && (
        <div className='w-[794px] h-[240px] p-[20px] flex flex-col mt-10 mx-auto my-auto bg-red-200 rounded-xl mb-9'>
          <h2 className='font-bold text-lg text-center m-[6px]'>How to play dice game?</h2>
          <div className='flex flex-col gap-3 '>
            <p>1. Select any number</p>
            <p>2. Click on dice image</p>
            <p>3. after click on dice if the selected number is equal to the dice number, you will get the same point as the dice</p>
            <p>4. if you get the wrong guess then 2 points will be deducted</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default RollingDice
