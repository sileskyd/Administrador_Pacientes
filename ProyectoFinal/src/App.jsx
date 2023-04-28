import { useState } from 'react'
import './App.css'
import Header from './header'
import Form from './Form'
import Paciente from './Paciente'
import Subtitulos from './Subtitulos'

function App() {
  const[pacientes, setPacientes]=useState([])

  return (
    <div className='App'>
      <Header titulo="Administrar mis citas"/>
      <br/>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col'>
            <Form pacientes={pacientes} setPacientes={setPacientes}/>
          </div>
          <div className='col'>
            <Subtitulos subtitulo="Mis Citas."/>
            {pacientes.map((paciente)=>{
              return <Paciente nombre={paciente.mascota} dueño={paciente.dueño}/>
            })}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
