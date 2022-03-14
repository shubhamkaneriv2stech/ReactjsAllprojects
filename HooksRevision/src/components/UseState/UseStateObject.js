import React, { useState } from "react";
import { Button } from "react-bootstrap";

const UseStateObject = () => {
    const [object, setObject] = useState({
        name: "Shubham",
        age: 24,
        degree: "B.E",
    });

    const changeObject = () => {
        setObject({ ...object, name: "Saurabh" });
    };
    return (
        <>
            <div className="text-center" style={{ marginTop: "230px" }}>
                <div
                    className="text-center"
                    style={{
                        fontSize: "20px",
                        borderRadius: "10px",
                        backgroundColor: "white",
                    }}
                >
                    MyName is{object.name} &&my age is{object.age} && my degree
                    is{object.degree}
                </div>
            </div>
            <div className="text-center mt-3">
                <Button variant="primary" onClick={changeObject}>
                    Update
                </Button>
            </div>
        </>
    );
};

export default UseStateObject;
