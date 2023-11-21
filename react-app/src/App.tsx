import {useState} from 'react'
import kkobuki from './assets/kko.png'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [inputText, setInputText] = useState('')

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <>
            <div>
                <a href="https://code-boki.tistory.com/" target="_blank">
                    <img src={kkobuki} className="logo" alt="Blog"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <h2> from Boki</h2>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <h2>Two Way Binding Text Input</h2>
            <input id="my-input" type="text" placeholder="Enter text here" value={inputText} onChange={handleInputChange}/>
            <p id="string-display">{inputText ? inputText : 'Initial value'}</p>
        </>
    )
}

export default App
