import { useState } from 'react'
import { Sandbox } from 'the-lego-lib'
import Button from '@mui/material/Button';
import 'the-lego-lib/styles'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>Hi there we are here</p>

      <Button variant="contained">Hello World</Button>

      <Sandbox />
    </div>
  )
}

export default App
