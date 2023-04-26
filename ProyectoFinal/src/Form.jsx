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
    <div>
      <div className='container-xl'>
        <h4>Agendar mi cita</h4>
        <form className='inputForm' action=''>
          <label htmlFor=''>Nombre Mascota</label>
          <input onChange={(e)=>{setMascota(e.target.value)}} value={mascota} type='text' />
          <label htmlFor=''>Nombre Dueño</label>
          <input onChange={(e)=>{setDueño(e.target.value)}} value={dueño} type='text' />
          <label htmlFor=''>Fecha de la cita</label>
          <input onChange={(e)=>{setFecha(e.target.value)}} value={fecha} type='date'/>
          <label htmlFor=''>Hora de la cita</label>
          <input onChange={(e)=>{setHora(e.target.value)}} value={hora} type='time'/>
          <label htmlFor=''>Síntomas o Comentarios</label>
          <textarea rows="2" cols="10" onChange={(e)=>{setDescripcion(e.target.value)}} value={descripcion} type='text'/>
          <br/>
          <button onClick={agregarPaciente} type='button' className='btn btn-primary'>Agregar</button>
        </form>
      </div>
    </div>
  )
}
