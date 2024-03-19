import React, {useState} from 'react'
import logo from '../assets/images/logoSf.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex mt-3 items-center justify-between xl:justify-start relative w-full p-4 h-[12vh] z-50">
        <div className="w-1/2 md:w-1/3 xl:w-1/6 items-center flex">
            <a href=""><img className="" src={logo} alt="logo" /></a>
            
        </div>
        <nav className={`fixed font-semibold bg-white w-[80%] md:w-[40%] xl:w-full h-full  ${ showMenu ? "left-0" : "-left-full"} top-0 flex-col xl:static flex-1 flex xl:flex-row text-center items-center justify-center gap-20 transition-all duration-500`}>
            <a className="text-xl hover:text-2xl transition-all duration-600" href="">Home</a>
            <a className="text-xl hover:text-2xl transition-all duration-600" href="">Nosotros</a>
            <a className="text-xl hover:text-2xl transition-all duration-600" href="">Contacto</a>
            <a className="text-xl hover:text-2xl transition-all duration-600" href="">Productos</a>
            <a className="text-xl hover:text-2xl transition-all duration-600" href="">Tienda</a>
        </nav>
        <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden text-2xl p-2">
            {showMenu ? <IoMdClose /> : <GiHamburgerMenu />}
        
        </button>
        
    </header>
  )
}

export default Header