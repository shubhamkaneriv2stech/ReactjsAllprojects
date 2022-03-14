import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const UseStateExampleWithArray = () => {
    const bioData = [
        {
            id: 1,
            myName: "Shubham1",
            age: 25,
        },
        {
            id: 2,
            myName: "Shubham2",
            age: 26,
        },
        {
            id: 3,
            myName: "Shubham3",
            age: 26,
        },
        {
            id: 4,
            myName: "Shubham4",
            age: 28,
        },
    ];

    const [state, setstate] = useState(bioData);

    const clearArray = () => {
        setstate([]);
    };

    const onDelete = (id) => {
        console.log(id);
        const data = state.filter((item) => item.id !== id);

        setstate(data);
    };
    return (
        <>
            <div className="text-center" style={{ marginTop: "230px" }}>
                <span style={{ fontSize: "20px" }}>
                    {state.map((items) => {
                        return (
                            <div
                                key={items.id}
                                className="text-center"
                                style={{
                                    fontSize: "20px",
                                    borderRadius: "10px",
                                    backgroundColor: "white",
                                }}
                            >
                                <h3>{`${items.myName} && ${items.age}`}</h3>

                                <Button onClick={() => onDelete(items.id)}>
                                    Remove
                                </Button>
                            </div>
                        );
                    })}
                </span>
            </div>
            <div className="text-center mt-3">
                <Button variant="primary" onClick={clearArray}>
                    Clear
                </Button>
            </div>
        </>
    );
};

export default UseStateExampleWithArray;
