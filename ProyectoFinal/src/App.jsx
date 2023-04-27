import { useState } from 'react'
import './App.css'
import Header from './header'
import Form from './Form'
import Subtitulos from './Subtitulos'

function App() {

  return (
    <div className='App'>
      <Header titulo="Administrar mis citas"/>
      <br/>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col'>
            <Form/>
          </div>
          <div className='col'>
            <Subtitulos subtitulo="No hay citas"/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
