import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            closeDropdown();
        }
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
            <h2 className="user-name" onClick={toggleDropdown}>
                Username
            </h2>
            {/* {dropdownVisible && (
                <ul className="profile-dropdown" ref={dropdownRef}>
                    <li className="dropdown-item" onClick={closeDropdown}>
                        My Profile
                    </li>
                    <li className="dropdown-item" onClick={closeDropdown}>
                        Logout
                    </li>
                </ul>
            )} */}
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
    );
}

export default Navbar;
