import React, {useState} from "react"
import axios from "axios"
const BASE_URL = "http://localhost:5000"


const App = () => {
    const [date, setDate] = useState("")
    const [input, setInput] = useState("")

    const handleSubmit = () => {
        
        axios.post(`${BASE_URL}/api`, {data: input}).then((response) => {
            console.log("workiiiing! " + response.data)
            setDate(response.data)
        })

    }

    const handleChange = (Event) => {
        setInput(Event.target.value)
        console.log("input: " + input)
    }

    return (
        <div>
            <h1>Hello World</h1>
            <input placeholder="enter a number" value={input} onChange={handleChange}></input>
            <br />
            <button onClick={handleSubmit} >submit</button>
            <h2>{date}</h2>
        </div>
    )
}

export default App