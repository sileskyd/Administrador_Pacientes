import React from 'react'

export default function Paciente({nombre, dueño}) {
  return (
    <div className='pacienteContainer'>
        <p>Nombre: {nombre}</p>
        <p>Dueño:{dueño}</p>
    </div>
  )
}
