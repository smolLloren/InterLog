import React from "react";
import "../styles/register.css";

function register() {
    return (
        <div className="register-page">
            <div className="details-container">
                <h1>Student Registration</h1>
                <div className="add-image">Add Image</div>
                <input type="email" placeholder="Please type your email..." />
                <input
                    type="password"
                    placeholder="please enter your password..."
                />
                <input type="text" placeholder="Please type your first name..."/>
                <input type="text" placeholder="Please type your last name..."/>
                <button>Register</button>
            </div>
        </div>
    );
}

export default register;
