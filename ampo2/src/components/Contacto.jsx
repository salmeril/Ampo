import React from 'react'
import telefono from '../assets/icons/tel.png'
import wp from '../assets/icons/wp.png'
import web from '../assets/icons/web.png'
import mail from '../assets/icons/mail.png'
import fotocontacto from '../assets/images/contactoimg.png'


const Contacto = () => {
  return (
    <section id="contacto" className=" h-[100vh] md:h-[100vh]">
        <div className="text-center md:mt-[20vh] lg:mt-20 ">
            <h2 className="font-title font-bold text-2xl ml-[10vh] text-start md:ml-[11vh] lg:ml-[70vh] md:text-4xl  mt-52 text-gray-500 ">
                Contactos
            </h2>

            <div className="grid md:grid-cols-2 md:m-5 md:">
                <div>
                    <div className="grid m-10 grid-cols-2">
                        <div>
                        <img className=" w-13 ml-[4vh] lg:ml-[64vh]" src={telefono} alt="" />

                        </div>
                        <div>
                            <h3 className="text-start font-robot text-lg ml-[-6vh] lg:ml-[26vh]">
                                Ventas: <br />
                                +15-5555-5555
                            </h3>
                        </div>
                    </div>

                    <div className="grid m-10 grid-cols-2">
                        <div>
                        <img className=" w-13 ml-[4vh] lg:ml-[64vh] " src={wp} alt="" />

                        </div>
                        <div>
                            <h3 className="text-start font-robot text-lg ml-[-6vh] lg:ml-[26vh]">
                                Ventas Mayoristas: <br />
                                +15-5555-5555
                            </h3>
                        </div>
                    </div>

                    <div className="grid m-10 grid-cols-2 ">
                        <div>
                        <img className=" w-13 ml-[4vh] lg:ml-[64vh]" src={wp} alt="" />

                        </div>
                        <div>
                            <h3 className="text-start font-robot text-lg ml-[-6vh] lg:ml-[26vh]">
                                Ventas Monoristas: <br />
                                +15-5555-5555
                            </h3>
                        </div>
                    </div>

                    <div className="grid m-10 grid-cols-2">
                        <div>
                        <img className=" w-13 ml-[4vh] lg:ml-[64vh]" src={mail} alt="" />

                        </div>
                        <div>
                            <h3 className="text-start mt-3 font-robot text-lg ml-[-6vh] lg:ml-[26vh]">
                            <a href="">Mail de contacto</a>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block lg:ml-[6vh] ">
                    <img src={fotocontacto} alt="Contacto" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacto