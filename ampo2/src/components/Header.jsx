import React, { useState, useRef } from 'react';

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { animateScroll as scroll } from 'react-scroll';
import logo from '../assets/images/logoSf.png'; // Importa la imagen del logo

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = section.getBoundingClientRect().top + window.scrollY ;
            scroll.scrollTo(offset, {
                duration: 500,
                smooth: 'easeInOutQuart',
            });
        }
        setShowMenu(false); // Cierra el menú al hacer clic en un elemento del menú
    };

    return (
        <header className="flex items-center justify-between xl:justify-start fixed top-0 w-full bg-white p-4 h-[12vh] z-50">
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 items-center flex">
                <a href="#inicio"><img className="" src={logo} alt="logo" /></a>
            </div>
            <nav className={`fixed font-semibold bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 flex-col xl:static flex-1 flex xl:flex-row text-center items-center justify-center gap-20 transition-all duration-500`}>
                <a className="text-xl hover:text-2xl transition-all duration-600 cursor-pointer" href="#inicio" onClick={() => scrollToSection("inicio")}>Home</a>
                <a className="text-xl hover:text-2xl transition-all duration-600 cursor-pointer" href="#historia" onClick={() => scrollToSection("historia")}>Nosotros</a>
                <a className="text-xl hover:text-2xl transition-all duration-600 cursor-pointer" href="#bazar" onClick={() => scrollToSection("bazar")}>Tienda</a>
                <a className="text-xl hover:text-2xl transition-all duration-600 cursor-pointer" href="#catalogo" onClick={() => scrollToSection("catalogo")}>Catalogos</a>
                <a className="text-xl hover:text-2xl transition-all duration-600 cursor-pointer" href="#contacto" onClick={() => scrollToSection("contacto")}>Contacto</a>
            </nav>
            <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden text-2xl p-2">
                {showMenu ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
        </header>
    );
}

export default Header;
