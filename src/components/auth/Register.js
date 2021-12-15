import React from 'react';
import './login.scss';
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div>
            <div>
                <div className="wrapper">
                    <div className="logo">
                        <img src="https://i.pinimg.com/564x/1f/3f/4c/1f3f4ce973d946578567f190e2773709.jpg" alt="" />
                    </div>
                    <div className="text-center mt-4 name"> To DO List </div>
                    <form className="p-3 mt-3">
                        <div className="form-field d-flex align-items-center">
                            <span className="far fa-user"></span>
                            <input type="text" name="userName" id="userName" placeholder="Username" />
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <span className="far fa-user"></span>
                            <input type="email" name="email" id="email" placeholder="email" />
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input type="password" name="password" id="pwd" placeholder="Password" />
                        </div>
                        <button className="btn mt-3"> Register </button>
                    </form>
                    <div className="text-center fs-6"> <Link to="/login">Login</Link></div>
                </div>
            </div>
        </div>
    )
}
