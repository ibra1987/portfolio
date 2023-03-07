import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
    const linkClass = " transition delay-200 border-b border-b-white p-2 hover:border-b-gray-200 "
  return (
    <nav className={"min-w-3/6 grow-1"}>

        <ul className={"w-full flex justify-start mx-4 items-center space-x-8"}>
        <li>
            <Link className={linkClass} to={"/"}>
               Home
            </Link>
        </li>
        <li>
            <Link className={linkClass} to={"/about"}>
               About
            </Link>
        </li>
        <li>
            <Link className={linkClass} to={"/Github"}>
               Projects
            </Link>
        </li>
        <li>
            <Link className={linkClass} to={"/Github"}>
               Github
            </Link>
        </li>
        <li>
            <Link className={linkClass} to={"/blog"}>
               Blog
            </Link>
        </li>
        </ul>


    </nav>
  )
}

export default NavBar