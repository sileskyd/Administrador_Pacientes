import React from 'react'

export default function Paciente({nombre, dueño, fecha, hora, descripcion}) {
  return (
    <div className='pacienteContainer'>
        <p>Nombre: {nombre}</p>
        <p>Dueño: {dueño}</p>
        <p>Fecha: {fecha}</p>
        <p>Hora de la cita: {hora}</p>
        <p>Descripción: {descripcion}</p>
    </div>
  )
}
