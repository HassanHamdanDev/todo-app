import React, { useEffect, useState } from "react";
import superagent from 'superagent';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
export const LoginContext = React.createContext();

export default function LoginProvider(props) {

    const API = 'https://hassan-auth-api.herokuapp.com';
    const [LoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const config = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };
    const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6bnVsbCwiaWF0IjoxNjM5NjAwMDM4fQ.OzzmQq2IUNOw1MLB0sOzbJ70s0Vzs41t372S8eqtUIw';
    
    const loginFunction = async (username, password) => {
        /// username hass password root
        try {
            const response = await superagent.post(`${API}/signin`, config).set('Authorization', `Basic ${TOKEN}`);
            console.log('object')
            console.log(response.body)
            validateMyToken(response.body.token);
        } catch (err) { }

    }
    const logoutFunction = () => {
        setLoggedIn(false);
        setUser({});
        cookie.remove('token');
    }

    const validateMyToken = (token) => {
        if (token) {
            const user = jwt.decode(token);
            console.log('user >>>', user);
            setLoggedIn(true);
            setUser(user);
            cookie.save('token', token);
        } else {
            setLoggedIn(false);
            setUser({});
        }
    }
    useEffect(() => {
        const myTokenCookie = cookie.load('token');
        validateMyToken(myTokenCookie);
    }, []);

    // const can = (capability) => {
    //     // chaining
    //     //optional chaining
    //     return user?.capabilities?.includes(capability);
    // }

    const state = {
        LoggedIn: LoggedIn,
        loginFunction: loginFunction,
        logoutFunction: logoutFunction,
        user: user,
        // can: can
    }
    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}