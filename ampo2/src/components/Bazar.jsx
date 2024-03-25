import React from 'react'
import t1 from '../assets/images/t1.png'
import t2 from '../assets/images/t2.png'
import t3 from '../assets/images/t3.png'

const Bazar = () => {


    
  return (
    <section id="bazar" className="bg-micolor w-full flex justify-center items-center ">
        <div className=" h-[100vh] md:h-[100vh] lg:h-[65vh] xl:h-[100vh] mb-10 ">
        
        <div className="" >
            <h2 className="font-title text-center text-white mt-[22vh] text-4xl font-bold md:text-4xl lg:text-5xl md:mt-[20vh] lg:mt-[15vh] ">
                Productos de Bazar y Envases
            </h2>
        </div>
        <div className="flex mt-14 md:mt-[8vh] lg:mt-[10vh] overflow-hidden justify-center items-center">
            <div>
                <img src={t1} alt="Taza1" className="transform transition-transform hover:translate-y-4 md:w-48 lg:w-64" />
            </div>

            <div>
                <img src={t2} alt="Taza2" className="transform transition-transform hover:translate-y-4 md:w-48 lg:w-64" />
            </div>

            <div>
                <img src={t3} alt="Taza3" className="transform transition-transform hover:translate-y-4 md:w-48 lg:w-64" />
            </div>
            
        </div>
        <div className="text-center mt-10">
            
        
            <a href='' className="inline-block rounded-md font-medium text-2xl bg-white px-4 py-4 text-gray-700 hover:scale-110 transition duration-300 ease-in-out shadow-lg">
                Abrir Tienda
            </a>







        </div>
    </div>
    </section>
   

  )
}

export default Bazar