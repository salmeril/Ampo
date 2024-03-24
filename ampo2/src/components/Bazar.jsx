import React from 'react'
import t1 from '../assets/images/t1.png'
import t2 from '../assets/images/t2.png'
import t3 from '../assets/images/t3.png'

const Bazar = () => {


    
  return (
    <div className=" bg-micolor h-[65vh] md:h-[50vh] lg:h-[65vh] xl:h-[60vh] mb-10">
        <h2 className="font-title text-center text-white text-4xl pt-5 font-bold ml-2 mr-2 md:text-4xl lg:text-5xl md:pt-10">
            Productos de bazar y envases
        </h2>
        <div className="flex mt-12 overflow-hidden justify-center items-center">
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

  )
}

export default Bazar