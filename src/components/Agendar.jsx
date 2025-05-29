import React from 'react'

import Header from './header'
import transfer from '../img/Bank Transfer Icon.png'
import deposito from '../img/Deposito dinero icon.png'
import whatsapp from '../img/Whatsapp icon.png'
import insta from '../img/Instagram logo.png'

function Agendar() {
  return (
    <div className='w-full'>
        <Header></Header>
        <div className='w-full mt-10 bg-gold px-6 pt-3 pb-7'>
                <h1 className='text-5xl font-bold text-principal '>Pasos</h1>
                <h2 className='text-white mt-3 ml-3 text-2xl' >1) Elige tu lectura: Selecciona el tipo de lectura que mas se acomode a tus objetivos y/o necesidades</h2>
                <h2 className='text-white mt-3 ml-3 text-2xl' >2) Programa tu cita: Escoge una fecha y el horario en el que desees ser atendido, pregunta por disponibilidad de citas</h2>
                <h2 className='text-white mt-3 ml-3 text-2xl' >3) A parta tu cita: Para respetar y apartar tu cita es necesario por lo menos el 50% de anticipo del costo de tu lectura</h2>
                <h2 className='text-white mt-3 ml-3 text-2xl' >4) Realiza el pago: El pago debe completarse antes de tu cita</h2>
        </div>
        <div className='flex flex-col items-center px-6'>
            <div className='w-full mt-10'>
                <h1 className='text-5xl font-bold text-gold '>Pagos</h1>
                <div className='grid grid-cols-2 mt-10'>
                    <div className='flex flex-col items-center'>
                        <div className='bg-gold py-3 px-9 rounded-lg'>
                            <img className='w-20' src={transfer} alt="transferencia" />
                        </div>
                        <h3 className='text-white text-2xl mt-2' >Transferencia</h3>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-gold py-3 px-9 rounded-lg'>
                            <img className='w-20' src={deposito} alt="deposito" />
                        </div>
                        <h3 className='text-white text-2xl mt-2' >Depósito</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full mt-10 bg-gold px-6 pt-3 pb-7'>
            <h1 className='text-5xl font-bold text-principal '>Contacto</h1>
            <div className='flex mt-4 w-full items-center py-2 gap-1'>
                <img className='w-7' src={whatsapp} alt="Whatsapp" />
                <p className='text-white text-2xl' >(33) 1039 0303</p> 
            </div>
            <div className='flex w-full items-center gap-1'>
                <img className='w-7' src={insta} alt="Whatsapp" />
                <p className='text-white text-2xl' >@tarot_de_fer</p>
            </div>
        </div>
    </div>
  )
}

export default Agendar
