import React from 'react'
import logonosotro from '../assets/images/logonosotros.png'

const Historia = () => {
  return (
    <section className="flex lg:grid lg:grid-cols-2 bg-gray-400 h-[65vh] md:h-[50vh] lg:h-[55vh] mt-10 mb-10">
        <div className="w-full lg:ml-48 lg:mt-12">
            <h1 className=" mt-4 mb-10 md:mt-10 text-center font-title text-4xl lg:text-5xl font-bold text-white lg:grid-cols-1">
                Sobre Nosotros
            </h1>
        <p className="text-center font-robot text-white text-xl m-5 md:m-12 md:text-2xl lg:text-3xl lg:text-left">
        Aporello nace inicialmente por los sueños de tres almas emprendedoras, dedicadas a la venta de artículos de bazar, envases y exquisitas fragancias mágicas. Con la intención de acompañar y brindar día a día a nuestros clientes una variedad de productos al mejor precio. Haciendo de la excelencia y calidad los pilares fundamentales de nuestra organización.
        </p>
        </div>
        <div className="hidden md:block md:mr-10 md:mt-5 lg:mt-20 lg:ml-26">
           <img className=" md:mt-20 lg:ml-64 lg:mt-1 lg:flex" src={logonosotro} alt="Nosotros" />
        </div>
    </section>
    
  )
}

export default Historia