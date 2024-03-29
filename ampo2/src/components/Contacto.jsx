import React from 'react'
import telefono from '../assets/icons/tel.png'
import wp from '../assets/icons/wp.png'
import web from '../assets/icons/web.png'
import mail from '../assets/icons/mail.png'
import fotocontacto from '../assets/images/contactoimg.png'


const Contacto = () => {
  return (
    <section id="contacto" className=" flex h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh] mb-2">
        <div className="text-center ">
            <div className="">
            <h2 className="font-title top-0 font-bold text-2xl ml-[5vh] mb-[4vh]  text-start md:ml-[11vh] lg:ml-[26vh] md:text-4xl  mt-24 md:mt-[25vh] lg:mt-[20vh] lg:mb-[5vh] xl:ml-[34vh] 2xl:ml-[48vh] text-gray-500 ">
                Contactos
            </h2>
            </div>

            <div className="grid mb-1 md:grid-cols-2 md:m-5 md:">
                <div>
                    

                    <div className="grid m-2 grid-cols-2">
                        <div>
                        <img className=" w-13 ml-[4vh] mb-[4vh]  md:ml-[8vh] md:mb-[3vh] lg:ml-[22vh] lg:mb-[5vh] xl:ml-[30vh] 2xl:ml-[45vh] " src={wp} alt="" />

                        </div>
                        <div>
                            <h3 className="text-start font-robot text-lg ml-[-3vh] lg:ml-[4vh]">
                                Ventas: <br /> Facundo Alderete:
                                    11-6478-9198 <br />
                                    Mail:
                            </h3>
                        </div>
                    </div>

                    <div className="grid m-2 grid-cols-2 ">
                        <div>
                        <img className=" w-13 ml-[4vh] mb-[4vh]  md:ml-[8vh] md:mb-[3vh] lg:ml-[22vh] lg:mb-[5vh] xl:ml-[30vh] 2xl:ml-[45vh]" src={wp} alt="" />

                        </div>
                        <div>
                            <h3 className="text-start font-robot text-lg ml-[-3vh] lg:ml-[4vh]">
                                Ventas: <br /> Geraldin Rodriguez:
                                11-6612-9051 <br />
                                Mail:
                            </h3>
                        </div>
                    </div>

                    <div className="grid m-2 grid-cols-2 ">
                        <div>
                        <img className=" w-13 ml-[4vh] mb-[4vh]  md:ml-[8vh] md:mb-[3vh] lg:ml-[22vh] lg:mb-[5vh] xl:ml-[30vh] 2xl:ml-[45vh]" src={wp} alt="" />

                        </div>
                        <div>
                            <h3 className="text-start font-robot text-lg ml-[-3vh] lg:ml-[4vh]">
                                Ventas: <br /> Norberto Severo:
                                11-4022-4952 <br />
                                Mail:

                            </h3>
                        </div>
                    </div>

                    <div className="grid m-2 grid-cols-2">
                        <div>
                        <img className=" w-13 ml-[4vh] mb-[4vh]  md:ml-[8vh] md:mb-[3vh] lg:ml-[22vh] xl:ml-[30vh] 2xl:ml-[45vh]" src={mail} alt="" />

                        </div>
                        <div>
                            <h3 className="text-start mt-3 font-robot text-lg ml-[-3vh] lg:ml-[4vh]">
                            <a href="">Mail de contacto</a>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block lg:ml-[8vh] lg:mt-0 xl:ml-[14vh] 2xl:ml-[4vh]  ">
                    <img src={fotocontacto} alt="Contacto" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacto