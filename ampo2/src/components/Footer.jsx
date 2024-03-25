import React from 'react'
import logo from '../assets/images/logoSf.png'
import face from '../assets/icons/facebook.png'
import whatsapp from '../assets/icons/whatsapp.png'
import insta from '../assets/icons/instagram.png'


const Footer = () => {
  return (
    <footer className="static bottom-0 left-0 w-auto bg-gray-700 text-white text-center">
        <div className=" bg-gray-500 grid grid-cols-2 ">
       <div className=" w-4/6 md:w-1/3 xl:w-1/3 items-center flex lg:">
            <a href=""><img className="w-[25vh] md:ml-[5vh] lg:w-[25vh] lg:mt-[-4vh] lg:mb-[-4vh] lg:ml-[15vh]" src={logo} alt="logo" /></a>
            
        </div>

        <div className="grid grid-cols-3 mt-[5vh] mr-[4vh] md:me-[10svh] lg:ml-[40vh]">
            <div className="mt-[1vh] md:ml-[10vh]">
                <a href=""><img src={face} alt="Facebook" /></a>
            
            </div>

            <div className="mt-0 md:ml-[5vh]">
                <a href=""><img src={insta} alt="Instagram" /></a>
            </div>

            <div className="mt-[1vh] ml-[2vh] ">
                <a href=""><img src={whatsapp} alt="Whatsapp" /></a>
            </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer