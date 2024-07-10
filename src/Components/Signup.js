import React, { useRef, useEffect } from "react";
import "../styles/signup.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Signup({ toggleSignUp }) {
    return (
        <>
            <div className="signup-page">
                <div className="container">
                    <IoMdCloseCircleOutline
                        className="close-icon"
                        onClick={toggleSignUp}
                    />
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
                    <p>Already have an account? Login</p>
                </div>
            </div>
        </>
    );
}

export default Signup;
