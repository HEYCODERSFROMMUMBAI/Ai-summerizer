import React from 'react'
import logo from  '../assets/logo.svg'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center flex-col'>
            <img src={logo}></img>
        </nav>

        
    </header>
  )
}

export default Hero