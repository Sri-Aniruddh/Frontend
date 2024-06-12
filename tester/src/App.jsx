import { useState } from 'react'
import {Signup} from '../src/components/Signup'
import { Popup } from './components/Popup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Signup page</h1>
      
      <Popup/>
    </div>
  )
}

export default App
