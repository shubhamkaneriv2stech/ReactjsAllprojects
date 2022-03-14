import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const UseEffectCleanUp = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth = () => {
        setWidthCount(window.innerWidth);
    };
    useEffect(() => {
        console.log("add event");
        window.addEventListener("resize", actualWidth);
        return () => {
            console.log("remove event");
            window.removeEventListener("resize", actualWidth);
        };
    });

    return (
        <Container
            className="text-center"
            style={{ marginTop: "230px", padding: "40px" }}
        >
            <p>The actual Size of windows is:</p>
            <h1>{widthCount}</h1>
        </Container>
    );
};

export default UseEffectCleanUp;
