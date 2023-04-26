import { useState } from 'react'
import './App.css'
import Header from './header'
import Form from './form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header/>
      <br/>
      <Form/>
      
    </div>
  )
}

export default App
