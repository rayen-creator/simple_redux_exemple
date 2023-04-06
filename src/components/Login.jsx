import React from "react";
import { useState } from "react";
import { login, logout } from '../redux/store';
import { useDispatch, useSelector } from "react-redux";
//usedispatch for modifying state
//useSelector for gettin states
//both are react redux hooks

export const Login = () => {
    const [newUsername, setNewUsername] = useState("");
    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.value.username);
    return (
        <h1>
            THIS IS THE LOGIN PAGE {username}
            <input onChange={(e) => { setNewUsername(e.target.value) }} />
            <button onClick={() => dispatch(login({ username: newUsername }))}>Submit login</button>
            <button onClick={()=>dispatch(logout())}>Logout</button>

        </h1>
    );
};