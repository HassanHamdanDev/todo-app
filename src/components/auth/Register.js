import React from 'react';
import './login.scss';
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/auth/context";
import { When } from 'react-if';

export default class Register extends React.Component {
    static contextType = LoginContext;
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            role: ""
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.context.sginUpnFunction(this.state.username, this.state.password, this.state.role);
    }
    render() {
        return (
            <>
                <When condition={!this.context.LoggedIn}>
                    <div>
                        <div className="wrapper">
                            <div className="logo">
                                <img src="https://i.pinimg.com/564x/1f/3f/4c/1f3f4ce973d946578567f190e2773709.jpg" alt="" />
                            </div>
                            <div className="text-center mt-4 name"> To DO List </div>
                            <form className="p-3 mt-3" onSubmit={this.handleSubmit}>
                                <div className="form-field d-flex align-items-center">
                                    <span className="far fa-user"></span>
                                    <input onChange={this.handleChange} type="text" name="userName" id="userName" placeholder="Username" />
                                </div>
                                <div className="form-field d-flex align-items-center">
                                    <span className="far fa-user"></span>
                                    <input onChange={this.handleChange} type="text" name="role" id="role" placeholder="role" />
                                </div>
                                <div className="form-field d-flex align-items-center">
                                    <span className="fas fa-key"></span>
                                    <input onChange={this.handleChange} type="password" name="password" id="pwd" placeholder="Password" />
                                </div>
                                <button type='submit' className="btn mt-3"> Register </button>
                            </form>
                            <div className="text-center fs-6"> <Link to="/login">Login</Link></div>
                        </div>
                    </div>
                </When>
                <When condition={this.context.LoggedIn}>
                    <div>
                        {this.context.user.username}
                    </div>
                    <button onClick={this.context.logoutFunction}>logout</button>
                </When>
            </>
        )
    }
}
