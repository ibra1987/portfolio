import React from 'react'
import NavBar from './NavBar'

type propTypes ={
    darkMode:Boolean,
    setDarkMode:React.Dispatch<React.SetStateAction<Boolean>>
  }
const Header = ({darkMode,setDarkMode}:propTypes) => {
  return (
    <div className={"w-full  flex flex-row-reverse justify-between items-center p-4"} >
     
     <NavBar/>
     <div className={"max-w-2/6"}>
     brahimdriouch.dev
     </div>
        </div>
  )
}

export default Header