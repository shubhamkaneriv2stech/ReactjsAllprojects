import React, { useReducer } from "react";
import { Container, Form, Button } from "react-bootstrap";
const UseReducerExample = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        console.log(state, action);
        switch (action.type) {
            case "INCREMENT":
                return state + 1;

            case "DECREMENT":
                return state - 1;
            default:
                break;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Container
            className="text-center"
            style={{ marginTop: "230px", padding: "40px" }}
        >
            <div>
                <p>{state}</p>
                <Button
                    variant="primary"
                    onClick={() => dispatch({ type: "INCREMENT" })}
                    className="m-5"
                >
                    Incremenent
                </Button>
                <Button
                    variant="primary"
                    onClick={() => dispatch({ type: "DECREMENT" })}
                >
                    Decrement
                </Button>
            </div>
        </Container>
    );
};

export default UseReducerExample;
