import { useState } from 'react'
import './App.css'
import webserviceClient from "./utils/WebserviceClient.tsx";

function App() {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState('')
    const [text, appendText] = useState('Click me to append my text')
    const getGreeting = () => webserviceClient.getGreetingWithName(input)
    const getHtml = () => webserviceClient.getHtml(input)

    return (
        <>
            <h1>React Frontend Sandbox</h1>

            <div className={"greeting"}>
                <label>
                    Enter your name: <input
                    className={"greeting-input"}
                    id={"greeting-input"}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                </label>
                <br/><br/>
                <button onClick={() => appendText((text) => text + ' ' + input)}>
                    {text}
                </button>
                <br/><br/>
                <button disabled={input.length == 0} onClick={getGreeting}>
                    Click me to get a greeting message
                </button>
                <br/><br/>
                <button disabled={input.length == 0} onClick={getHtml}>
                    Click me to download an HTML file
                </button>
            </div>

            <div className="example">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default App
