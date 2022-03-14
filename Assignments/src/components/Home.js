import React, { useState, useEffect, useContext } from "react";
import List from "./List/List";
import Profile from "./Profile/Profile";
import img from "./img/img.png";

import "./Home.css";
import Table from "./Table/Table";
import Todo from "./Todo/Todo";
import PassingData from "./ReusableTable/PassingData";
import TodoContextReducer from "./ContextReducer/TodoContextReducer";
import { GlobalContext } from "../components/ContextReducer/GlobalState";
const Home = (props) => {
    const { todo } = useContext(GlobalContext);
    const logout = (e) => {
        props.onLogout();
    };

    const [menu, setMenu] = useState({
        list: [
            {
                id: "profile",
                value: "Profile",
            },
            {
                value: "List",
                id: "list",
            },
            {
                value: "Table",
                id: "table",
            },
            {
                value: "Todo App",
                id: "todo",
            },
            {
                value: "Reusable Table",
                id: "ReTable",
            },
            {
                value: "TodoAppContext",
                id: "TodoAppContext",
            },
        ],
    });

    let [state, setState] = useState("profile");

    const list = (e) => {
        console.log(e.target.id);
        setState(e.target.id);
        console.log(state);
    };
    console.log("--------------------------------------");

    console.log(state);

    useEffect(() => {
        setState("profile");
    }, []);

    return (
        <div>
            <div className="sidebar">
                <div className="img">
                    <img
                        src={img}
                        alt=""
                        className="rounded-circle"
                        width="150"
                    />
                </div>
                <hr />
                <ul className="listItem">
                    {menu.list.length > 0 &&
                        menu.list.map((items, i) => {
                            return (
                                <li
                                    key={i}
                                    onClick={list}
                                    id={items.id}
                                    className={
                                        state === items.id
                                            ? "list-group-item active"
                                            : "list-group-item "
                                    }
                                >
                                    {items.value !== "TodoAppContext"
                                        ? items.value
                                        : `${items.value} (${todo.length})`}
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div className="main_div">
                <div className="container-fluid ">
                    <nav className="navbar navbar-light bg-info justify-content-between">
                        <span className="navbar-brand">Dashboard</span>
                        <button className="btn btn-danger " onClick={logout}>
                            Logout
                        </button>
                    </nav>
                </div>
                <div className="view">
                    {state === "profile" && <Profile />}
                    {state === "list" && <List />}
                    {state === "table" && <Table />}
                    {state === "todo" && <Todo />}
                    {state === "ReTable" && <PassingData />}
                    {state === "TodoAppContext" && <TodoContextReducer />}
                </div>
            </div>
        </div>
    );
};

export default Home;
