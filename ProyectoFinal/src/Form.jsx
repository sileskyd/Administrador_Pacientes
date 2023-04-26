import React, {useState} from 'react'
import './form.css'

export default function Form() {

  const[mascota,setMascota]=useState("Perro")

  return (
    <div>
      <div>
        <form className='inputForm' action=''>
          <label htmlFor=''>Nombre Mascota</label>
          <input onChange={(e)=>{setMascota(e.target.value)}} value={mascota} type='text' />
          <label htmlFor=''>Nombre Dueño</label>
          <input type='text' />
          <button type='submit'>Agregar</button>
        </form>
      </div>
    </div>
  )
}
