import './App.css'
import { useState, createRef } from 'react'

const App = () => {
  const [result, setResult] = useState(0)
  const inputRef = createRef()

  const handleConvert = () => {
    setResult(parseInt(inputRef.current.value, 2))
  }

  return (
    <div className='container'>
      <div className='binary-area'>
        <h2>Bin2Dec</h2>
        <input ref={inputRef} />
        <button onClick={handleConvert}>Convert</button>
        <h1>{result}</h1>
      </div>
    </div>
  )
}

export default App
