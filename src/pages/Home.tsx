import { useRef, useState } from "react"
import Hero from "../components/home/Hero"
import Works from "../components/home/Works"
import React from "react"
import NavBar from "../components/NavBar"
type propTypes ={
    darkMode:Boolean,
}

const Home = ({darkMode}:propTypes) => {
  const [scrollRequest,setScrollRequest]=React.useState<Boolean>(false)

    const setRef=()=>{
        setScrollRequest(true)
       const reset = setTimeout(()=>{
   setScrollRequest(false)
       },1000)
  
       return ()=> clearTimeout(reset)
    }
  return (
    <div className=" w-full flex flex-col justify-center items-center">
        <Hero setRef={setRef} darkMode={darkMode}/>
       
        {/* <Works scrollRequest={scrollRequest} setScrollRequest={setScrollRequest} /> */}
    </div>
  )
}

export default Home