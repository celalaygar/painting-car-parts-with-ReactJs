import { useState } from 'react'
import './App.css'
import My0000 from './0000.svg';
import MySVG from './component/MySVG';
import MySVG2 from './component/MySVG2';

function App() {

  return (
    <>
      <div style={{ padding: '20px' }}>
        <MySVG2 />
        <br/>
        <MySVG />
      </div>
    </>
  )
}

export default App
