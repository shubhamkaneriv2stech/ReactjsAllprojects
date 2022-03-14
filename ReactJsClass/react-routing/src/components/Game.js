import React, {useState} from 'react'
import {useHistory} from "react-router-dom"

export default function Game() {

    const history = useHistory();

    console.log(history);

    const [guess, setAnswer] = useState("");

    const [isCorrect, setCorrect] = useState(true)

    const element = <h3>Wrong Answer</h3>

    const handleChange =(e) => {
        setAnswer(e.target.value);
    }

    const handleClick =(e) => {
        if(guess === "React") {
            history.push("/result")
        } else {
            setCorrect(!isCorrect);
        }
    }

    
    return (
        <div>
            <h1>Guessing Game</h1>


            <div>

                <label>
                    
                    <b>Name a frontend Library</b></label>
            </div>

            <label>Guess Your Answer</label>

            <input onChange={handleChange} value={guess}  type="text"/>

            <button onClick={handleClick}>Check Answer</button>
        </div>
    )
}
