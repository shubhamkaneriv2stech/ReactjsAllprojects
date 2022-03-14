import React, { useState } from "react";
import { Button } from "react-bootstrap";
const UseStateExample1 = () => {
    const [Value, setValue] = useState("Please changed Value");

    const [state, setState] = useState(true);

    const changeValue = () => {
        setValue(" Value Changed");
    };
    return (
        <>
            <div className="text-center" style={{ marginTop: "230px" }}>
                <span style={{ fontSize: "20px" }}> {Value}</span>
            </div>
            <div className="text-center mt-3">
                <Button variant="primary" onClick={changeValue}>
                    Primary
                </Button>
            </div>
            <div className="text-center">
                <span style={{ fontSize: "20px" }}>
                    {" "}
                    {state ? "original value " : "modify Value"}{" "}
                </span>
            </div>
            <div className="text-center mt-3">
                <Button
                    variant="primary"
                    onClick={() => {
                        setState(!state);
                    }}
                >
                    Primary
                </Button>
            </div>
        </>
    );
};

export default UseStateExample1;
