import React from 'react';
import fondohistoria from '../assets/images/envases2.png'; // Importar la imagen

function handleClick() {
  const btn = document.getElementById('myButton');
  btn.classList.add('scale-95');
  setTimeout(() => {
    btn.classList.remove('scale-95');
  }, 300);
}

const Nosotros = () => {
  return (
    <section id="inicio" className="relative h-[100vh] md:h-[100vh] xl:h-[100vh] grid lg:grid-rows-2 gap-4 mt-0 ">
      {/* Capa de fondo de color */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-400 z-0"></div>
      
      {/* Contenido */}
      <div className="z-20 font-title md:mt-0 text-3xl md:text-5xl lg:text-5xl text-stone-900 font-medium text-center lg:mt-2 xl:mt-8 lg:row-span-1 relative">
        {/* Cuadrado semitransparente para enmarcar el texto */}
        <div className="absolute top-1/4 md:top-1 lg:top-1 w-full h-[50vh] md:h-[35vh] lg:h-[25vh] bg-opacity-30 rounded-lg "></div>
        <h1 className="mt-[20vh] md:mt-[18vh] lg:mt-[20vh] xl:mt-[16vh] m-1 relative z-10 ">¡Envases Esenciales! <br /> Encuentra todo en MAS Aporello</h1>
      </div>
      
      <div className="z-20 flex justify-center lg:row-span-2 lg:mt-16 xl:mt-5 items-center h-full">
        <a href="#historia" className="inline-block rounded-md font-medium text-2xl bg-white px-4 py-4 text-slate-900 hover:scale-110 transition duration-300 ease-in-out shadow-lg">
          Sobre Nosotros
        </a>
      </div>

      {/* Imagen de fondo */}
      <div className="bg-slate-200 absolute top-20 left-0 w-full h-full bg-cover bg-no-repeat bg-center z-0" style={{ backgroundImage: `url(${fondohistoria})` }}></div>
    </section>
  );
}

export default Nosotros;
