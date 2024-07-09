import React from "react";
import Navbar from "../Components/navbar";
import "../styles/home.css";

function home() {
    return (
        <>
            <Navbar />
            <div className="home-page">
                <h2>
                    <span className="main-text">Internship</span> made easy.
                </h2>
                <button>Get Started</button>
            </div>
        </>
    );
}

export default home;
