import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
const UseEffectExample = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Chats (${count})`;
    });

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

export default UseEffectExample;
