import { useState } from 'react'

import './App.css'
import Navbars from './Components/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div>
    <Navbars/>
    
     </div>
    
  )
}

export default App
