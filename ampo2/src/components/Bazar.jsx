import React from 'react'
import t1 from '../assets/images/1.png'
import t2 from '../assets/images/2.png'
import t3 from '../assets/images/3.png'
import fondobazar from '../assets/images/bazarfondo.png'

const Bazar = () => {

    function handleClick() {
        const btn = document.getElementById('myButton');
        btn.classList.add('scale-95');
        setTimeout(() => {
          btn.classList.remove('scale-95');
        }, 300);
      }

    
  return (
    <section id="bazar" className="relative h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh] grid lg:grid-rows-2 gap-4">
      {/* Capa de fondo de color */}
      
      
      {/* Contenido */}
      <div className="z-20 font-title mt-1 md:mt-10 text-4xl md:text-6xl lg:text-6xl text-stone-900 font-medium text-center lg:mt-2 lg:row-span-1 relative">
        {/* Cuadrado semitransparente para enmarcar el texto */}
        <div className="absolute top-1/4 lg:top-1 w-full h-[50vh] md:h-[35vh] lg:h-[25vh] bg-opacity-30 rounded-lg "></div>
        <h1 className="mt-[22vh] md:mt-[16vh] lg:mt-[16vh] xl:mt-[18vh] m-3 relative z-10 ">¡Visitá Nuestra Tienda!</h1>
      </div>
      
      <div className="z-20 flex justify-center lg:row-span-2 lg:mt-[-4vh] xl:mt-2 items-center h-full">
        <a href="#historia" className="inline-block rounded-md font-medium text-2xl bg-white px-4 py-4 text-slate-900 hover:scale-110 transition duration-300 ease-in-out shadow-lg">
          Tienda On-Line
        </a>
      </div>

      {/* Imagen de fondo */}
      <div className="bg-slate-200 absolute top-0 left-0 w-full h-[100vh] bg-cover bg-no-repeat bg-center z-0" style={{ backgroundImage: `url(${fondobazar})` }}></div>
    </section>
   

  )
}

export default Bazar