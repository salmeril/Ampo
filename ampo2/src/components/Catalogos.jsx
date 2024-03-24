import React from 'react'
import fotoprueba from '../assets/images/imgprueba.png'
import fotoprueba2 from '../assets/images/imgprueba2.png'


function handleClick() {
    const btn = document.getElementById('myButton');
    btn.classList.add('scale-95');
    setTimeout(() => {
      btn.classList.remove('scale-95');
    }, 300);
  }

const Catalogos = () => {
    return (

        <section>
        
      
            <div className=" grid">

{/* parte de vidrio*/}

                <h2 className="text-center pt-5 font-title font-bold text-gray-600 text-3xl lg:text-4xl mt-5">
                    Catalogo de venta Mayorista
                </h2>
        
            <div className="grid md:m-9 md:grid-cols-2 lg:pl-72 ">
        
                <div className=" w-[53vh] md:w-[46vh] z-10 md:ml-[3vh] h-[46vh] md:h-[30vh] lg:h-[40vh] lg:w-[60vh] lg:ml-[12vh] bg-gray-100 m-3 ">

                    <h3 className="font-title m-7 text-center text-2xl lg:text-3xl lg:m-10 font-bold text-gray-500">
                        Catalogo envases de vidro decoración
                    </h3>

                    <p className="text-center text-xl lg:text-2xl font-robot mb-4 lg:mb-8 text-gray-500 m-5 lg:m-10">
                        Descubre la elegancia atemporal en nuestro catálogo de envases de vidrio.
                    </p>
  
                    <div className="flex justify-center">
                        <a href='' id="myButton" className="bg-white flex justify-center items-center mt-3 text-center hover:bg-blue-400 focus:outline-none focus:ring text-gray-800 font-bold py-2 lg:py-4 px-4 lg:px-6 rounded transition duration-600 shadow-lg" onClick={handleClick}>
                        Haz clic aquí
                    </a>
                </div>
            </div>

            <div className="hidden md:flex justify-center mt-2 items-center ">
                <img src={fotoprueba} className=" mt-1 mr-[3vh] md:mr-[5vh] lg:mr-[53vh] md:ml-[2vh] h-72 lg:h-[43vh] md:w-[47vh] lg:w-[60vh] " alt="catalogo vidrio deco" />

            </div>

            


   
            </div>
        <div className="grid md:m-9 md:grid-cols-2 md:mt-[-7vh] lg:mt-[-8vh]  lg:pl-72 ">
                
                <div className="hidden md:flex justify-center mt-2 items-center ">
                    <img src={fotoprueba2} className=" mr-[3vh] md:mr-[-3vh] z-20 md:ml-[1vh] h-72 lg:h-[43vh] md:w-[46vh] lg:w-[60vh] lg:ml-[-4vh] " alt="catalogo vidrio deco" />

                </div>

                <div className=" w-[53vh] md:w-[46vh] z-10 md:ml-[0vh] md:mt-[1vh] h-[46vh] md:h-[30vh] lg:h-[40vh] lg:w-[60vh] lg:ml-[-13vh] bg-gray-100 m-3 ">

                    <h3 className="font-title m-7 text-center text-2xl lg:text-3xl lg:m-10 font-bold text-gray-500">
                    Catalogo botella plastico
                    </h3>

                    <p className="text-center text-xl lg:text-2xl font-robot mb-4 lg:mb-8 text-gray-500 m-5 lg:m-10">
                    Descubre la versatilidad en nuestro catálogo de botellas de plástico.
                    </p>
  
                    <div className="flex justify-center">
                        <a href='' id="myButton" className="bg-white flex justify-center items-center mt-12 text-center hover:bg-blue-400 focus:outline-none focus:ring text-gray-800 font-bold py-2 lg:py-4 px-4 lg:px-6 rounded transition duration-600 shadow-lg" onClick={handleClick}>
                        Haz clic aquí
                    </a>
                </div>
            </div>

            

            


   
            
            </div>
            

        </div>
    </section>

      
  )
}

export default Catalogos