import { useRef, useState } from "react"
import Hero from "../components/home/Hero"
import Works from "../components/home/Works"
import * as React from "react"

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
    <div className="min-h-screen">
        <Hero setRef={setRef} darkMode={darkMode}/>
        <Works scrollRequest={scrollRequest} setScrollRequest={setScrollRequest} />
    </div>
  )
}

export default Home