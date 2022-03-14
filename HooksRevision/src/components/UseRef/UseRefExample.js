import React, { useRef, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const UseRefExample = () => {
    const inputRef = useRef(null);
    const [name, setName] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        setName(inputRef.current.value);
    };
    return (
        <Container
            className="text-center"
            style={{ marginTop: "130px", padding: "40px" }}
        >
            <Form onSubmit={submitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        ref={inputRef}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <span>Your Enter name is:{name}</span>
        </Container>
    );
};

export default UseRefExample;
