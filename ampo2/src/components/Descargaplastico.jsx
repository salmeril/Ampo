import React from 'react'
import cosmeticaplast from '../assets/images/cosmeticaplastico.png'

const Descarga = () => {
  return (
    <section>
        <div className="text-center">
            <h2 className="font-title">
              Descarga Catalogos Mayoristas
            </h2>
          <div className="grid grid-flow-col">
            <div className="border-[0.2vh] border-black border-solid bg-red-600 ">
              <img src={cosmeticaplast} className="w-[20vh] ml-10" alt="" />
              <h3>
                titulo
              </h3>
            </div>

            <div>
                card2
            </div>
            <div>
                card3 
            </div>
            <div>
                card4
            </div>

          </div>
            
           

            
        </div>
    </section>
  )
}

export default Descarga