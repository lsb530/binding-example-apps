import {ChangeEvent, useState} from 'react'
import kkobuki from './assets/kko.png'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [inputText, setInputText] = useState('')
    const [look, setLook] = useState('Not handsome')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    const lookStyle = () => {
        return look === 'Not handsome' ? 'yellow' : 'green';
    }

    return (
        <>
            <div className="center">
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
            <div className="card">
                <h2>One Way Binding</h2>
                <button type="button" onClick={() => setLook('handsome')}>
                    잘생겨지게 만들기
                </button>
                <h3 style={{ color: lookStyle() }}>{look}</h3>
            </div>
            <div className="card">
                <h2>Two Way Binding Text Input</h2>
                <input id="my-input" type="text" placeholder="Enter text here" value={inputText} onChange={handleInputChange}/>
                <p className="string-display">{inputText ? inputText : 'Initial value'}</p>
            </div>
        </>
    )
}

export default App
