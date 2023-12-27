import React, { useState } from 'react'
import StartPage from './components/StartPage'
import GamePage from './components/GamePage'

const App = () => {
  const [start, setStart] = useState(false)

  const toggleStart = ()=>{
    setStart(!start)
  }
  
  return (
    <div>
      {start?<GamePage/>:<StartPage toggle={toggleStart}/>}
      
    </div>
  )
}

export default App
