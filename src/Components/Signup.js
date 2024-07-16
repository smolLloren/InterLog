import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";
import Navbar from "./navbar";

function Signup() {
    return (
        <>
            <Navbar />
            <div className="signup-page">
                <div className="container">
                    <h2>Sign Up</h2>
                    <div className="inputs-container">
                        <div className="inputs">
                            <label htmlFor="email">Email</label>
                            <input type="email" />
                        </div>
                        <div className="inputs">
                            <label htmlFor="password">Password</label>
                            <input type="password" />
                        </div>
                    </div>
                    <button>Create Account</button>
                    <p>
                        Already have an account?{" "}
                        <Link className="login-shrtcut" to='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Signup;
