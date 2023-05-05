import { useState } from 'react'
import './App.css'
import Header from './Header'
import Form from './Form'
import Paciente from './Paciente'
import Subtitulos from './Subtitulos'
import Banner from './Banner'

function App() {
  const[pacientes, setPacientes]=useState([]);
  const eliminar = (index) => {
    setPacientes(pacientes.filter((paciente, ind) => ind != index));
  }

  return (
    <div className='App'>
      <Header titulo="Administrar mis citas."/>
      <br/>
      <br/>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col'>
            <Subtitulos subtitulo="Agregar Cita."/>
            <Form pacientes={pacientes} setPacientes={setPacientes}/>
          </div>
          <div className='col'>
            <Subtitulos subtitulo="Mis Citas."/>
            {pacientes.map((paciente, index)=>{
              return <Paciente 
                        nombre={paciente.mascota} 
                        dueño={paciente.dueño} 
                        fecha={paciente.fecha} 
                        hora={paciente.hora}
                        descripcion={paciente.descripcion}
                        eliminarFuncion={() => eliminar(index)}
                      />
            })}
          </div>
        </div>
      </div>
      <br/>
      <Banner/>
    </div>
  )
}

export default App
