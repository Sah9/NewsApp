import React, { Component, useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      
    }
  }
  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <News />

    </div>
  )
}
export default App;
