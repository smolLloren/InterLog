import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";
import "../styles/signup.css";
import Navbar from "./navbar";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const auth = getAuth();

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log("User sign up successfully");

            //Send Email Verification
            await sendEmailVerification(userCredential.user);
            console.log("Email verification sent");

            //Check Email Verification
            const user = userCredential.user;
            console.log("Email Verified: ", user.emailVerified);

            //User Logout after Signup
            await signOut(auth);
            console.log("User Signed Out");

            //No user logged in verifications
            const currentUser = auth.currentUser;
            console.log("Current user after logout: ", currentUser);

            navigate("/login");
        } catch (error) {
            if (error.code === "auth/weak-password") {
                setError("Password must be at least 8 characters long.");
            } else if (error.code === "auth/invalid-email") {
                setError("Please enter a valid email.");
            } else {
                setError(error.message);
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="signup-page">
                <div className="container">
                    <h2>Sign Up</h2>
                    <div className="inputs-container">
                        <div className="inputs">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="inputs">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button onClick={handleSignup}>Create Account</button>
                    <p>
                        Already have an account?{" "}
                        <Link className="login-shrtcut" to="/login">
                            Login
                        </Link>
                    </p>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </>
    );
}

export default Signup;
