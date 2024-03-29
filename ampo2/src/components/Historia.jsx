import React from 'react'
import logonosotro from '../assets/images/logonosotros.png'
import backgroundImage from '../assets/images/fondo2pn.png'

const Historia = () => {
  return (
    <section id="historia" className="flex lg:grid lg:grid-cols-2 bg-gray-600 h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh]  2xl:h-[100vh] " style={{ backgroundImage: `url(${backgroundImage})`, }}>

        <div className="w-full lg:ml-16 lg:mt-10">
            <h1 className=" mt-[26vh] mb-10 md:mt-[32vh] lg:mt-[28vh] text-center font-title text-4xl lg:text-5xl font-bold xl:mt-[28vh] text-white lg:mb-12 lg:text-clip">
                Sobre Nosotros
            </h1>
        <p className="text-center font-robot text-white text-xl m-5 md:m-12 md:text-xl lg:text-2xl lg:m-2 xl:mt-14">
        "Aporello nace inicialmente del sueño de tres almas emprendedoras, dedicadas a la venta de artículos de bazar, envases y exquisitas fragancias mágicas. <br /> Con la intención de acompañar y brindar día a día a nuestros clientes una variedad de productos al mejor precio, haciendo de la excelencia y la calidad los pilares fundamentales de nuestra organización."
        </p>
        </div>
        <div className="hidden md:block md:mr-10 md:mt-16 lg:mt-28 lg:ml-36 xl:ml-52  xl:mt-[4vh] 2xl:mt-12 2xl:ml-72  ">
           <img className=" md:mt-[32vh] lg:mt-[22vh] xl:mt-[30vh] lg:w-[40vh] lg:flex xl:w-80 2xl:w-96 " src={logonosotro} alt="Nosotros" />
        </div>
    </section>
    
  )
}

export default Historia