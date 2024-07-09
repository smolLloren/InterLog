import React from "react";
import "../styles/navbar.css";

function navbar() {
    return (
        <div className="navbar">
            <h1>interLog</h1>
            <ul>
                <li>Community</li>
                <li>Logs</li>
                <li>Calendar</li>
                <li>Tasks</li>
            </ul>
            <div className="navbar-buttons">
                <button className="login-button">Login</button>
                <button className="create-account-button">
                    Create Account
                </button>
            </div>
        </div>
    );
}

export default navbar;
