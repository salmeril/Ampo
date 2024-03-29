import React from 'react'
import fotoprueba from '../assets/images/imgprueba.png'
import fotoprueba2 from '../assets/images/imgprueba2n.png'

import accesoriocosmetica from '../assets/images/accesorioscosmetica.png'
import cosmeticaplastico from '../assets/images/cosmeticaplastico.png'
import cosmeticavidrio from '../assets/images/cosmeticavidrio.png'
import envasesytapas from '../assets/images/envasesytapas.png'
import alimenticio from '../assets/images/alimenticio.png'
import vidriodeco from '../assets/images/vidriodeco.png'
import bazar from '../assets/images/bazar.png'
import pet from '../assets/images/pet.png'
import casa from '../assets/images/lineahogar.png'



function handleClick() {
    const btn = document.getElementById('myButton');
    btn.classList.add('scale-95');
    setTimeout(() => {
      btn.classList.remove('scale-95');
    }, 300);
  }

  function Descarga(){
    const [showCards, setShowCards] = () => {
        setShowCards(!showCards);
    }
  }

const Catalogos = () => {
    return (

        <section id="catalogo" className="">
            <div>
            <h2 className="text-center font-title font-medium text-gray-600 text-3xl lg:text-4xl mt-12  mb-5">
                Catálogo de venta Mayorista
                </h2>
            </div>


            
            <div className="grid grid-rows grid-col-1 md:grid-cols-2 m-0 md:m-0 lg:m-7 lg:mt-12 gap-0 text-center">

                <div className="bg-cyan-200 md:bg-slate-200 h-[50vh] md:h-[45vh] lg:w-[60vh] lg:ml-1 xl:ml-[20vh] 2xl:ml-[42vh]">
                    <h3 className="font-title mt-16 lg:mt-12 xl:mt-16 m-7 text-center text-xl lg:text-2xl font-medium text-gray-800 ">
                            Catálogo envases de Cosmética de vidrio
                        </h3>

                        <p className="text-center mt-10 text-lg lg:text-xl font-robot mb-0 lg:mb-8 text-gray-500 m-5 lg:m-8 xl:mt-[8vh]">
                                Descubre la elegancia atemporal en nuestro catálogo de envases de vidrio para cosmética
                        </p>
  
                        <div className="flex justify-center">
                            <a href="https://drive.google.com/drive/folders/1TCvuIED6GaVtbz5IGlotQ71vXpFbquc0?usp=sharing" id="myButton" className="bg-white flex justify-center items-center  text-center hover:bg-blue-400 focus:outline-none focus:ring text-gray-800 font-medium py-2 lg:py-4 px-4 lg:px-6 rounded transition duration-600 shadow-lg mt-10" onClick={handleClick}>
                                Descargar Catálogo
                            </a>
                        </div>
                </div>
                    
                <div className="hidden md:block ">
                <img src={cosmeticavidrio} className="md:h-[45vh]" alt="catalogo vidrio deco" />
                </div>

                <div className="hidden md:block">
                    <img src={cosmeticaplastico} className="md:h-[45vh] lg:ml-1 lg:w-[60vh] xl:ml-[20vh] 2xl:ml-[42vh]" alt="catalogo vidrio deco" />

                </div>

                <div className=" bg-rose-200 md:bg-slate-200 h-[50vh] md:h-[45vh] lg:h-[45vh] lg:w-[58vh] lg:ml-1 xl:w-[59vh] xl:ml-0 ">
                <h3 className="font-title m-5 mt-16 lg:mt-12 md:pt-0 text-center text-xl lg:text-2xl lg:m-10 font-medium text-gray-800 ">
                        Catálogo Cosmética Plástico 
                    </h3>

                    <p className="text-center mt-12 text-lg lg:text-xl font-robot mb-4 lg:mb-8 text-gray-500 m-5  lg:m-10 xl:mt-[8vh]">
                    Descubre la versatilidad en nuestro catálogo de Envases de plástico.
                    </p>
  
                    <div className="flex justify-center">
                        <a href="https://drive.google.com/drive/folders/1UwItdb9LUl3SR_jqJ5EzUkLK3XLJiP7V?usp=sharing" id="myButton" className="bg-white flex justify-center items-center mt-10 md:mt-5 lg:mt-12 xl:mt-12 text-center hover:bg-blue-400 focus:outline-none focus:ring text-gray-800 font-medium py-2 lg:py-4 px-4 lg:px-6 rounded transition duration-600 shadow-lg" onClick={handleClick}>
                            Descargar Catálogo
                        </a>
                    </div>
                </div>

                <div className=" bg-cyan-200 md:bg-slate-200 h-[50vh] md:h-[45vh] lg:w-[60vh] lg:ml-1 xl:ml-[20vh] 2xl:ml-[42vh]">
                    
                    <h3 className="font-title m-5 mt-16 lg:mt-12 md:pt-0 text-center text-xl lg:text-2xl lg:m-10 font-medium text-gray-800 ">
                        Catálogo de Accesorios para Cosmética
                    </h3>

                    <p className="text-center mt-12 md:mt-5 text-lg lg:text-xl font-robot mb-1 lg:mb-8 text-gray-500 m-5 lg:m-10">
                        Descubre todas las Variedades de Envases y Accesorios para Cosmética.
                    </p>
  
                    <div className="flex justify-center">
                        <a href="https://drive.google.com/drive/folders/1wRRG9MobDE_XG9z2bjYv7p9J0oplZxkx?usp=sharing" id="myButton" className="bg-white flex justify-center items-center mt-10 text-center hover:bg-blue-400 focus:outline-none focus:ring text-gray-800 font-medium py-2 lg:py-4 px-4 lg:px-6 rounded transition duration-600 shadow-lg" onClick={handleClick}>
                            Descargar Catálogo 
                        </a>
                    </div>
                </div>

                <div className="hidden md:block">
                    <img src={accesoriocosmetica} className="md:h-[45vh]  " alt="catalogo vidrio deco" />
                </div>

                <div className="hidden md:block">
                    <img src={envasesytapas} className="md:h-[45vh] lg:ml-1 lg:w-[60vh] xl:ml-[20vh] 2xl:ml-[42vh]" alt="catalogo vidrio deco" /> 
                </div>

                <div className="bg-red-200 md:bg-slate-200 h-[50vh] md:h-[45vh] lg:w-[59vh] lg:ml-0">
                    <h3 className="font-title m-5 mt-16 lg:mt-12 pt-0 md:pt-0 text-center text-xl lg:text-2xl lg:m-10 font-medium text-gray-800 ">
                         Catálogo de Envases y Tapas 
                    </h3>

                    <p className="text-center mt-12 text-lg lg:text-xl font-robot mb-4 lg:mb-8 text-gray-500 m-5 lg:m-10">
                        Descubre la Variedad de combinaciones en modelos de Envases y tapas.
                    </p>
  
                    <div className="flex justify-center">
                        <a href="https://drive.google.com/drive/folders/1k0tZ4uBKiz4RN4QdH2hJRMantnayzxhF?usp=sharing" id="myButton" className="bg-white flex justify-center items-center mt-10  md:mt-1 lg:mt-12 text-center hover:bg-blue-400 focus:outline-none focus:ring text-gray-800 font-medium py-2 lg:py-4 px-4 lg:px-6 rounded transition duration-600 shadow-lg" onClick={handleClick}>
                            Descargar Catálogo
                        </a>
                    </div>
                </div>

                
                <div className="bg-cyan-200 md:bg-slate-200 h-[50vh] md:h-[45vh] lg:w-[60vh] lg:ml-1 xl:ml-[20vh] 2xl:ml-[42vh]">
                
                    <h3 className="font-title m-5 mt-16 lg:mt-12 pt-0 md:pt-0 text-center text-xl lg:text-2xl lg:m-10 font-medium text-slate-800 xl:mt-[8vh] ">
                        Catalogo Envases vidrio Decoración
                    </h3>

                    <p className="text-center mt-12 md:mt-5 text-lg lg:text-xl font-robot mb-4 lg:mb-8 text-gray-500 m-5 lg:m-10">
                        Descubre la Elegancia de Nuestros Envases para Decoración.
                    </p>

                    <div className="flex justify-center">
                        <a href="https://drive.google.com/drive/folders/1rxu_371J639VcFEHcK43Z_VkSgGA344h?usp=sharing" id="myButton" className="bg-white flex justify-center items-center mt-10 md:mt-5 xl:mt-12 text-center hover:bg-blue-400 focus:outline-none focus:ring text-gray-800 font-medium py-2 lg:py-4 px-4 lg:px-6 rounded transition duration-600 shadow-lg" onClick={handleClick}>
                            Descargar Catálogo
                        </a>
                    </div>
                </div>

                <div className="hidden md:block"><img src={vidriodeco} className=" h-[45vh] " alt="catalogo vidrio deco" /></div>

                <div className="hidden md:block"><img src={pet} className="h-[45vh] lg:ml-1 lg:w-[60vh] xl:ml-[20vh] 2xl:ml-[42vh] " alt="catalogo vidrio deco" /></div>
                
                <div className="bg-rose-200 md:bg-slate-200 h-[50vh] md:h-[45vh] lg:w-[59vh] lg:mr-0">
                    <h3 className="font-title m-5 mt-20 lg:mt-12 pt-0 md:pt-0 text-center text-xl lg:text-2xl lg:m-10 font-medium text-gray-800 xl:mt-[8vh] ">
                             Catálogo de Envases PET
                        </h3>

                        <p className="text-center mt-12 text-lg lg:text-xl font-robot mb-4 lg:mb-8 text-gray-500 m-5 lg:m-10 xl:mt-[8vh]">
                            Descubre la Variedad de Frascos de Plástico PET.
                        </p>

                    <div className="flex justify-center">
                        <a href="https://drive.google.com/drive/folders/1waKMsfXKtrjkzTSgpC07K_dQZfI_lSKK?usp=sharing" id="myButton" className="bg-white flex justify-center items-center mt-10 md:mt-6 text-center hover:bg-blue-400 focus:outline-none focus:ring text-gray-800 font-medium py-2 lg:py-4 px-4 lg:px-6 rounded transition duration-600 shadow-lg" onClick={handleClick}> 
                            Descargar Catálogo
                        </a>
                    </div></div>


                <div className="bg-cyan-200 md:bg-slate-200 h-[50vh] md:h-[45vh] lg:w-[60vh] lg:ml-1 xl:ml-[20vh] 2xl:ml-[42vh]">
                    <h3 className="font-title m-7 mt-16 lg:mt-12 pt-0 md:pt-0 text-center text-xl lg:text-2xl lg:m-10 font-medium text-gray-800 xl:mt-[8vh]">
                    Catálogo de Envases Alimenticios
                    </h3>

                    <p className="text-center mt-12 md:mt-6 text-lg lg:text-xl font-robot mb-4 lg:mb-8 text-gray-500 m-5 lg:m-10 xl:mt-[8vh]">
                    Conoce todos los Envases Alimenticios que Tenemos para Ofrecer.
                    </p>

                    <div className="flex justify-center">
                        <a href="https://drive.google.com/drive/folders/1h3S6XDVPJPfBCEcJnp4gybpBP6qnUhxB?usp=sharing" id="myButton" className="bg-white flex justify-center items-center mt-10 md:mt-5 text-center hover:bg-blue-400 focus:outline-none focus:ring text-gray-800 font-medium py-2 lg:py-4 px-4 lg:px-6 rounded transition duration-600 shadow-lg" onClick={handleClick}>
                            Descargar Catálogo 
                        </a>
                    </div>
                </div>

                <div className="hidden md:block"><img src={alimenticio} className=" md:h-[45vh] " alt="catalogo vidrio deco" /></div>

                <div className="hidden md:block"> <img src={bazar} className="md:h-[45vh] lg:ml-1 lg:w-[60vh] xl:ml-[20vh] 2xl:ml-[42vh]" alt="catalogo vidrio deco" /></div>
                
                <div className="bg-red-200 md:bg-slate-200 h-[50vh] md:h-[45vh] lg:w-[58vh] lg:ml-1">
                    <h3 className="font-title m-5 mt-20 lg:mt-12 pt-0 md:pt-0 text-center text-xl lg:text-2xl lg:m-10 font-medium text-gray-800 xl:mt-[8vh] ">
                        Catálogo de Bazar
                    </h3>

                    <p className="text-center mt-12 md:mt-6 text-lg lg:text-xl font-robot mb-4 lg:mb-8 text-gray-500 m-5 lg:m-10">
                        Descubre la versatilidad en nuestro catálogo de botellas de plástico.
                    </p>

                <div className="flex justify-center">
                <a href="https://drive.google.com/drive/folders/1qXD21BNSd4Q79zJ3lsg9VzWhhG1uDf4I?usp=sharing" id="myButton" className="bg-white flex justify-center items-center mt-10 md:mt-5 lg:mt-12 text-center hover:bg-blue-400 focus:outline-none focus:ring text-gray-800 font-medium py-2 lg:py-4 px-4 lg:px-6 rounded transition duration-600 shadow-lg" onClick={handleClick}>
                    Descargar Catálogo
                </a>
                </div></div>

                <div className="bg-cyan-200 md:bg-slate-200  text-gray-800 h-[50vh] md:h-[45vh] lg:w-[60vh] lg:ml-1 xl:ml-[20vh] 2xl:ml-[42vh] ">
                    <h3 className="font-title m-5 mt-20 lg:mt-12 pt-0 md:pt-0 text-center text-xl lg:text-2xl lg:m-10 font-medium text-gray-800 xl:mt-[8vh] ">
                        Catálogo Envases Alimenticios
                    </h3>

                    <p className="text-center mt-12 md:mt-6 text-lg lg:text-xl font-robot mb-4 lg:mb-8 text-gray-500 m-5 lg:m-10">
                        Descubre Nuestro Catálogo para la linea Hogar y Comercios. 
                    </p>

            <div className="flex justify-center">
                <a href="https://drive.google.com/drive/folders/13CbrqpNQMJSkUDNRS_f-i5iG84LadzQ8?usp=sharing" id="myButton" className="bg-white flex justify-center items-center mt-10 md:mt-5 xl:mt-[6vh] text-center hover:bg-blue-400 focus:outline-none focus:ring text-gray-800 font-medium py-2 lg:py-4 px-4 lg:px-6 rounded transition duration-600 shadow-lg" onClick={handleClick}>
                    Descargar Catálogo
                </a>
            </div></div>

            <div className="hidden md:block"><img src={casa} className="md:h-[45vh] xl:ml-0" alt="catalogo vidrio deco" /></div>
            
        
        
   
        </div>
    
    
</section>

      
  )
}

export default Catalogos