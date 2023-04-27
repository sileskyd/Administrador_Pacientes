import React, {useState} from 'react'
import './form.css'

export default function Form() {

  const[pacientes, setPacientes]=useState([])
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
        <h4>Agendar mi cita</h4>
        <form className='inputForm' action=''>
          <div className='mb-3'>
            <label htmlFor=''>Nombre Mascota</label>
            <br/>
            <input onChange={(e)=>{setMascota(e.target.value)}} value={mascota} type='text' />
          </div>
          <div className='mb-3'>
            <label htmlFor=''>Nombre Dueño</label>
            <br/>
            <input onChange={(e)=>{setDueño(e.target.value)}} value={dueño} type='text' />
          </div>
          <div className='mb-3'>
            <label htmlFor=''>Fecha de la cita</label>
            <br/>
            <input onChange={(e)=>{setFecha(e.target.value)}} value={fecha} type='date'/>
          </div>
          <div className='mb-3'>
            <label htmlFor=''>Hora de la cita</label>
            <br/>
            <input onChange={(e)=>{setHora(e.target.value)}} value={hora} type='time'/>
          </div>
          <div className='mb-3'>
            <label htmlFor=''>Síntomas o Comentarios</label>
            <br/>
            <textarea rows="2" cols="40" onChange={(e)=>{setDescripcion(e.target.value)}} value={descripcion} type='text'/>
          </div>
          <br/>
          <button onClick={agregarPaciente} type='button' className='btn btn-primary'>Agregar</button>
        </form>
      </div>
    </div>
  )
}
