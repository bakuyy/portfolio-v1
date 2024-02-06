import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  
  const [showDropdown, setShowDropdown] = useState(false)  
  const links = [
    {
        name: "HOME",
        id: "home",
        route: "/",
    },
    {
        name: "ABOUT",
        id: "about",
        route: "/about",
    },
    {
        name: "PROJECTS",
        id: "projects",
        route: "/projects",
    },
    {
        name: "OTHER",
        id: "other",
        route: "/other",
    },
  ]


  return (
    <div >
        <div className='flex pt-7 pb-7 bg-[#5b805b]'>
        <div className='mx-10'>
            <img src={''} alt="Logo"/>
        </div>
        <div className={`${showDropdown ? "flex" : "hidden"} flex-col lg:flex  lg:flex-row lg:ml-auto mt-3 lg:mt-0`}>
        <div className='mx-10'>
        <button
            onClick={ () => {setShowDropdown(!showDropdown)}}
        >
            <FaBars/>
        </button>
        
          {links.map(({ name, route, id }) => 
            <Link className="mx-3 text-white" key={name}  to={route}>
                {name}
            </Link>
          )}
          </div>
        </div>
    </div>
    </div>

  )
}

export default Navbar
