import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const BasicForms = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAllEntry, setNewAllEntry] = useState([]);

    const onsubmithandler = (e) => {
        e.preventDefault();
        const newEntry = { email, password };

        setNewAllEntry([...newAllEntry, newEntry]);
        console.log(newAllEntry);

        setEmail("");
        setPassword("");
    };
    return (
        <Container
            className="text-center"
            style={{ marginTop: "230px", padding: "40px" }}
        >
            <Form onSubmit={onsubmithandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        name="email"
                        autoComplete="off"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder=" Enter Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        autoComplete="off"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {newAllEntry.map((items, i) => {
                return (
                    <div key={i} className="bg-primary">
                        email:- {items.email} password:- {items.password}
                    </div>
                );
            })}
        </Container>
    );
};

export default BasicForms;
