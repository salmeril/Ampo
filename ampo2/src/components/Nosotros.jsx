import React from 'react'
import fondon from '../assets/images/nosotrosFondo.png'

function handleClick() {
  const btn = document.getElementById('myButton');
  btn.classList.add('scale-95');
  setTimeout(() => {
    btn.classList.remove('scale-95');
  }, 300);
}


const Nosotros = () => {
  return (
    <section id="inicio" className="h-[75vh] md:h-[55vh] xl:h-[55vh] flex grid lg:grid-rows-2 gap-4 mt-5 bg-[url('/src/assets/images/nosFondo.png')] lg:mt-[10vh]">
        <div className="font-title mt-1 md:mt-10 text-5xl md:text-6xl lg:text-7xl text-stone-500 font-semibold text-center lg:mt-2 lg:row-span-1">
            <h1 className="mt-20 m-3 xl:mt-16 ">Los mejores precios en envases plasticos y de vidrio</h1>
        </div>
        <div className=" flex justify-center lg:row-span-2  lg:mt-16 xl:mt-5 items-center h-full">


          <a href="" className="inline-block rounded-md font-medium text-2xl bg-white px-4 py-4 text-gray-700 hover:scale-110 transition duration-300 ease-in-out shadow-lg">
                Abrir Tienda
            </a>
            
           

        </div>
    </section>
  )
}

export default Nosotros