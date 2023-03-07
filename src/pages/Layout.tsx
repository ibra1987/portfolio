import React from 'react'
import Header from "../components/Header"
import {Outlet} from 'react-router-dom'
type propTypes ={
  darkMode:Boolean,
  setDarkMode:React.Dispatch<React.SetStateAction<Boolean>>
}

const Layout = ({darkMode,setDarkMode}:propTypes) => {
  const LayoutClass= "flex flex-col justify-between items-center px-8"

  return (
    <div className={darkMode ? LayoutClass + " bg-gray-600 text-gray-100" : LayoutClass + " bg-white text-gray-500 " }>
    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet/>
    </div>
  )
}

export default Layout