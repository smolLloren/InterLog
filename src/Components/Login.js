import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import Navbar from "./navbar";

function Login() {
    return (
        <>
            <Navbar />
            <div className="login-page">
                <div className="container">
                    <h2>Login</h2>
                    <div className="inputs-container">
                        <div className="inputs">
                            <label htmlFor="email">Email</label>
                            <input type="email" />
                        </div>
                        <div className="inputs">
                            <label htmlFor="password">Password</label>
                            <input type="password" />
                        </div>
                        <button>Login</button>
                        <p>
                            Don't have an account?&nbsp;
                            <Link className="signup-shrtcut" to="/signup">
                                Create an Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
