import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import "../styles/navbar.css";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <Link to="/home">
                    <h1>interLog</h1>
                </Link>
                <ul>
                    <Link>
                        <li>Community</li>
                    </Link>
                    <Link>
                        <li>Logs</li>
                    </Link>
                    <Link>
                        <li>Logs</li>
                    </Link>
                    <Link>
                        <li>Calendar</li>
                    </Link>
                    <Link>
                        <li>Tasks</li>
                    </Link>
                </ul>
                <div className="navbar-buttons">
                    <Link to="/login">
                        <button className="login-button">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="create-account-button">
                            Create Account
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
