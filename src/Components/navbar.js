import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const usernameRef = useRef(null);

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
                        onClick={handleDropdownItemClick}
                    >
                        Logout
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Navbar;
