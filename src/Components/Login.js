import React, { useRef, useEffect, useState, useTransition } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../styles/login.css";
import Navbar from "./navbar";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const userBeforeLogin = auth.currentUser;
        console.log("User before login attemp: ", userBeforeLogin);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (user && user.emailVerified) {
                navigate("/community");
                console.log(
                    "Login Successful | Logged in user email: ",
                    user.email
                );
            } else {
                setError("Please verify your email before loggin in.");
            }
        } catch {
            console.log("Login failed: ", error);
            setError("Invalid email or password");
        }
    };

    return (
        <>
            <Navbar />
            <div className="login-page">
                <div className="container">
                    <h2>Login</h2>
                    <div className="inputs-container">
                        <div className="inputs">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="inputs">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button onClick={handleLogin}>Login</button>
                        <p>
                            Don't have an account?&nbsp;
                            <Link className="signup-shrtcut" to="/signup">
                                Create an Account
                            </Link>
                        </p>
                        {error && <p className="error-message">{error}</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
