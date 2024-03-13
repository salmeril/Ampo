import React from 'react'
import fondon from '../assets/images/nosotrosFondo.png'

const Nosotros = () => {
  return (
    <section className="h-[54vh] flex grid grid-cols-1 gap-4 mt-5 bg-[url('/src/assets/images/nosFondo.png')]">
        <div className="font-title mt-5 md:mt-10 text-5xl md:text-7xl lg:text-8x  text-stone-500 font-semibold text-center ">
            <h1 className="mt-20 m-3">Los mejores precios en envases plasticos y de vidrio</h1>
        </div>
        <div className="flex justify-center items-center h-full">
            
            <button className="rounded-full border-2 font-medium text-2xl border-gray-600 bg-slate-100 bg-transparent px-10 py-4 text-slate-600 hover:bg-gray-100 hover:border-gray-600 hover:text-gray-800 transition duration-600 ease-in-out transform hover:scale-105">
             Conocenos
            </button>

        </div>
    </section>
  )
}

export default Nosotros