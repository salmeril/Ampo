import React from 'react'
import fondon from '../assets/images/envases.png'

function handleClick() {
  const btn = document.getElementById('myButton');
  btn.classList.add('scale-95');
  setTimeout(() => {
    btn.classList.remove('scale-95');
  }, 300);
}


const Nosotros = () => {
  return (
    <section id="inicio" className="relative h-[100vh] md:h-[100vh] xl:h-[100vh] grid lg:grid-rows-2 gap-4 mt-5 ">
  {/* Capa de fondo de color */}
  <div className="absolute top-0 left-0 w-full h-full  z-10 opacity-50"></div>
  
  {/* Contenido */}
  <div className="z-20 font-title mt-1 md:mt-10 text-5xl md:text-6xl lg:text-7xl text-stone-800 font-semibold text-center lg:mt-2 lg:row-span-1 relative">
    {/* Cuadrado semitransparente para enmarcar el texto */}
    <div className="absolute top-1/4 lg:top-1/2 w-full h-[50vh] md:h-[35vh] lg:h-[25vh] bg-sky-500 bg-opacity-30 rounded-lg shadow-2xl"></div>
    <h1 className="mt-[28vh] md:mt-[26vh] lg:mt-[20vh] xl:mt-[28vh] m-3 relative z-10 ">Los mejores precios en envases <br /> plásticos y de vidrio</h1>
  </div>
  
  <div className="z-20 flex justify-center lg:row-span-2 lg:mt-16 xl:mt-5 items-center h-full">
    <a href="#historia" className="inline-block rounded-md font-medium text-2xl bg-white px-4 py-4 text-slate-900 hover:scale-110 transition duration-300 ease-in-out shadow-lg">
      Sobre Nosotros
    </a>
  </div>

  {/* Imagen de fondo */}
  <div className="  md:block bg-slate-400 absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center z-0" style={{ backgroundImage: `url('/src/assets/images/envases.png')` }}></div>
</section>



  
  )
}

export default Nosotros