import React, {useState} from 'react'
import './form.css'
import Subtitulos from './Subtitulos'

export default function Form({pacientes, setPacientes}) {

  const[mascota,setMascota]=useState("")
  const[dueño,setDueño]=useState("")
  const[fecha,setFecha]=useState("")
  const[hora,setHora]=useState("")
  const[descripcion, setDescripcion]=useState("")

  function agregarPaciente(){
    const informacion={
      mascota,
      dueño,
      fecha,
      hora,
      descripcion

    }
    setPacientes([...pacientes,informacion])
    setMascota("")
    setDueño("")
    setFecha("")
    setHora("")
    setDescripcion("")
  }

  return (
    <div className='container formulario-central'>
      <div>
        <form className='inputForm' action=''>
          <div className='mb-3'>
            <label htmlFor=''>Nombre Mascota</label>
            <br/>
            <input id='mascota' onChange={(e)=>{setMascota(e.target.value)}} value={mascota} type='text' />
          </div>
          <div className='mb-3'>
            <label htmlFor=''>Nombre Dueño</label>
            <br/>
            <input id='dueño' onChange={(e)=>{setDueño(e.target.value)}} value={dueño} type='text' />
          </div>
          <div className='mb-3'>
            <label htmlFor=''>Fecha de la cita</label>
            <br/>
            <input id='fecha' onChange={(e)=>{setFecha(e.target.value)}} value={fecha} type='date'/>
          </div>
          <div className='mb-3'>
            <label htmlFor=''>Hora de la cita</label>
            <br/>
            <input id='hora' onChange={(e)=>{setHora(e.target.value)}} value={hora} type='time'/>
          </div>
          <div className='mb-3'>
            <label htmlFor=''>Síntomas o Comentarios</label>
            <br/>
            <textarea id='descripcion' rows="2" cols="40" onChange={(e)=>{setDescripcion(e.target.value)}} value={descripcion} type='text'/>
          </div>
          <br/>
          <button onClick={agregarPaciente} type='button' className='btn btn-primary'>Agregar</button>
        </form>
      </div>
    </div>
  )
}
