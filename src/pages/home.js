import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/navbar";
import Signup from "../Components/Signup";
import "../styles/home.css";

function Home() {
    const [showSignup, setShowSignup] = useState(false);

    const toggleSignUp = () => {
        setShowSignup(!showSignup);
    };

    return (
        <>
            <Navbar />
            {showSignup && <Signup toggleSignUp={toggleSignUp} />}
            <div className="home-page">
                <div className="hero">
                    <h2>
                        <span className="main-text">Internship</span> made easy.
                    </h2>
                    <button onClick={toggleSignUp}>Get Started</button>
                </div>
            </div>
        </>
    );
}

export default Home;
