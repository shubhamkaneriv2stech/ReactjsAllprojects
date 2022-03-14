import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function GameResult() {
    const history = useHistory();

    const handleClick =() => {
        history.goBack();
    }


  
    return (
        <div>
            <h1>Success</h1>
{/* <Link to="/game">
<button >
            
                
                Go Back
                </button>

</Link> */}


<button onClick={handleClick}>Go Back</button>

            
        </div>
    )
}
