import React from 'react'
import logo from "../assets/logo.jpeg"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const navs = [
        {
            text: "About us",
            path: "/about-us"
        },
        {
            text: "Contact",
            path: "/contact"
        },
        {
            text: "Gallery",
            path: "/"
        },


    ]
    return (
        <div className='h-24 lg:h-32 w-full sticky shadow-lg flex items-center justify-between px-4 md:px-20 lg:px-40'>
            {/* <p className='lg:text-3xl sm:text-sm font-serif'>Global Enterprise</p> */}
            <img src={logo} className='w-24 lg:w-40 p-2' />
            <div className='flex gap-6'>
                {navs.map((item, i) => <button key={i} className='hover:font-semibold w-fit text-xs lg:text-base lg:w-24' onClick={() => navigate(item.path)}>{item.text}</button>)}
            </div>
        </div>
    )
}

export default Navbar
