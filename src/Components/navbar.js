import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import "../styles/navbar.css";

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const usernameRef = useRef(null);

    const navigate = useNavigate();

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            usernameRef.current &&
            !usernameRef.current.contains(event.target)
        ) {
            setShowDropdown(false);
        }
    };

    const handleDropdownItemClick = () => {
        setShowDropdown(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                console.log("User's email before logout: ", user.email);
            } else {
                console.log("No user currently logged in");
            }

            await signOut(auth);

            const loggedOutUser = auth.currentUser;
            if (!loggedOutUser) {
                console.log("No user is currently logged in");
            } else {
                console.log(
                    "Logout failed, current user's email: ",
                    loggedOutUser.email
                );
            }

            navigate("/home");
        } catch (error) {
            console.log("Signout failed", error);
        }
    };

    return (
        <div className="navbar">
            <Link to="/home">
                <h1>interLog</h1>
            </Link>
            <ul className="nav-list">
                <Link to="/community">
                    <li>Community</li>
                </Link>
                <Link to="/logs">
                    <li>Logs</li>
                </Link>
                <Link to="/calendar">
                    <li>Calendar</li>
                </Link>
                <Link to="/tasks">
                    <li>Tasks</li>
                </Link>
            </ul>
            <h2
                className="user-name"
                onClick={toggleDropdown}
                ref={usernameRef}
            >
                Username
            </h2>
            {showDropdown && (
                <ul className="profile-dropdown" ref={dropdownRef}>
                    <li
                        className="dropdown-item"
                        onClick={handleDropdownItemClick}
                    >
                        My Profile
                    </li>
                    <li
                        className="dropdown-item"
                        onClick={() => {
                            handleDropdownItemClick();
                            handleLogout();
                        }}
                    >
                        Logout
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Navbar;
