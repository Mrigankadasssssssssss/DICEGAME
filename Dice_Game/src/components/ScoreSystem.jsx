import React, { useState } from 'react'
import Box from './Box'

const ScoreSystem = ({score, selected, onSelect,error}) => {

  const scores = [1,2,3,4,5,6]  
  
  return (
    <div className='max-w-[1280px] max-h-[151px] flex justify-between mt-[64px] mx-[80px] items-center'>

        <div className='flex flex-col gap-2 justify-center items-center' >
            <h1 className='text-5xl font-bold'>{score}</h1>
            <p className='font-semibold'>Total Score</p>
        </div>
        <p className='text-red-500'>{ error}</p>
        <div className='flex gap-5'>
            {scores.map((scorers,i)=>(
                <Box key={i} child={scorers}
            selected={selected}
            onSelect={onSelect} />
                   
                
            ))}
            
        </div>
      
    </div>
  )
}

export default ScoreSystem
