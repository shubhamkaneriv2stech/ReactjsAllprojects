import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
const UseEffectDependency = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        count === 0
            ? (document.title = `Chats `)
            : (document.title = `Chats (${count})`);
    }, [count]);

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
                click me{" "}
            </button>
        </Container>
    );
};

export default UseEffectDependency;
