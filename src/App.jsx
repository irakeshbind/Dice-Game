import React, { useState } from 'react'
import StartGame from './Component/StartGame'
import './App.css';
import GamePlay from './Component/GamePlay';
function App() {

  const [isGameStarted,setisGamestarted]=useState(false);
   const toggleGamePlay=()=>{
    setisGamestarted((prev)=> !prev);
   };
  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
    </>
  );
}

export default App