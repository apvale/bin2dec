import './App.css'
import { useState, createRef } from 'react'

const App = () => {
  const [result, setResult] = useState({ value: '0', isValid: true })
  const inputRef = createRef()

  const handleConvert = () => {
    const regex = /^[0|1]+$/

    if (regex.exec(inputRef.current.value)) {
      setResult({
        value: parseInt(inputRef.current.value, 2),
        isValid: true
      })
    } else {
      setResult({
        value: 'Non binary number',
        isValid: false
      })
    }
  }

  return (
    <div className='container'>
      <div className='binary-area'>
        <h1>Bin2Dec</h1>
        <div className='input-area'>
          <input className={result.isValid ? '' : 'invalid'} ref={inputRef} />
          <button onClick={handleConvert}>Convert</button>
          <h1 className={result.isValid ? '' : 'invalid'}>{result.value}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
