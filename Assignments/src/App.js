import React, { useState } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import { GlobalProvider } from "./components/ContextReducer/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    let users = [
        {
            username: "user1",
            password: "abc123",
            uId: "1",
        },
        {
            username: "user2",
            password: "pass123",
            uId: "2",
        },
        {
            username: "user3",
            password: "pass123",
            uId: "3",
        },
    ];

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [errMsg, seterrMsg] = useState({
        msg: "",
        color: "",
    });

    const loginHandler = (username, password) => {
        const updateList = users.find((e) => {
            return e.username === username && e.password === password;
        });
        console.log(updateList);
        if (updateList) {
            setIsLoggedIn(true);
        } else {
            seterrMsg({
                msg: " Invalid login Credentials",
                color: "text-danger",
            });
        }
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        seterrMsg({
            msg: " logout Sucessfully",
            color: "text-success",
        });
    };

    return (
        <>
            {isLoggedIn ? (
                <GlobalProvider>
                    <Home onLogout={logoutHandler} />
                </GlobalProvider>
            ) : (
                <Login onLogin={loginHandler} errMsg={errMsg} />
            )}
        </>
    );
}

export default App;
