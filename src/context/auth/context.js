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


    const loginFunction = async (username, password) => {
        const auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
        try {
            const response = await superagent.post(`${API}/signin`).set('Authorization', auth);
            validateMyToken(response.body.token);
        } catch (err) { }
    }

    const logoutFunction = () => {
        setLoggedIn(false);
        setUser({});
        cookie.remove('token');
    }

    const sginUpnFunction = async (username, password, role) => {
        const user = { username: username, password: password, role: role };
        try {
            const response = await superagent.post(`${API}/signup`,).send(user);
            validateMyToken(response.body.token);
            setToken(response.body.token);
        } catch (err) { }
    }

    const validateMyToken = (token) => {
        if (token) {
            const user = jwt.decode(token);
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
        sginUpnFunction: sginUpnFunction,
        user: user,
        // can: can
    }
    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}