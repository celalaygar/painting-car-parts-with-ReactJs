import { useState } from 'react'
import './App.css'
import My0000 from './0000.svg';
import MySVG from './component/MySVG';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Vite + React</h1>
      </div>
      {/* <div>
        <img src={My0000} alt="My SVG Icon" />
      </div> */}
      <div style={{ padding: '20px' }}>
        <h1>Component</h1>
        <MySVG />
      </div>
    </>
  )
}

export default App
