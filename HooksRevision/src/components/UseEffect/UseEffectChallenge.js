import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import UseTitileCount from "../CustomHooks/UseTitileCount";
const UseEffecChallenge = () => {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     count === 0
    //         ? (document.title = `Chats `)
    //         : (document.title = `Chats (${count})`);
    // });

    
//Custom Hook
    UseTitileCount(count)
    return (
        <Container
            className="text-center"
            style={{ marginTop: "230px", padding: "40px" }}
        >
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                {" "}
                click me{" "}
            </button>
        </Container>
    );
};

export default UseEffecChallenge;
