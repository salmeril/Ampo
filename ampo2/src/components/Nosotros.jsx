import React from 'react'
import fondon from '../assets/images/nosotrosFondo.png'


const Nosotros = () => {
  return (
    <section className="h-[75vh] md:h-[55vh] xl:h-[55vh] flex grid lg:grid-rows-2 gap-4 mt-5 bg-[url('/src/assets/images/nosFondo.png')]">
        <div className="font-title mt-1 md:mt-10 text-5xl md:text-6xl lg:text-7xl text-stone-500 font-semibold text-center lg:mt-2 lg:row-span-1">
            <h1 className="mt-20 m-3 xl:mt-16 ">Los mejores precios en envases plasticos y de vidrio</h1>
        </div>
        <div className=" flex justify-center lg:row-span-2  lg:mt-16 xl:mt-5 items-center h-full">
            
            <a className="rounded-full border-2 font-medium text-2xl border-gray-600 bg-slate-200 bg-transparent px-10 py-4 text-slate-600 hover:bg-gray-100 hover:border-gray-600 hover:text-gray-800 transition duration-600 ease-in-out transform hover:scale-105 shadow-md">
             Conocenos
            </a>

        </div>
    </section>
  )
}

export default Nosotros