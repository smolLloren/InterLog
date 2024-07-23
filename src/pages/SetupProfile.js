import React, { useState, useEffect, useRef } from "react";
import "../styles/setupProfile.css";
import Navbar from "../Components/navbar";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa";

function SetupProfile() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedGender, setSelectedGender] = useState("Gender");
    const [profileImage, setProfileImage] = useState(null);
    const dropdownRef = useRef(null);
    const dropdownHeaderRef = useRef(null);
    const fileInputRef = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            dropdownHeaderRef.current &&
            !dropdownHeaderRef.current.contains(event.target)
        ) {
            setShowDropdown(false);
        }
    };

    const handleDropdownItemClick = (gender) => {
        setSelectedGender(gender);
        setShowDropdown(false);
    };

    const handleProfileImgClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please select a valid image file (jpg or png).");
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="setup-profile">
                <div className="main-container">
                    <div className="header">
                        <h2>Setup your profile</h2>
                        <p>
                            Provide your information to personalize your
                            experience
                        </p>
                    </div>
                    <div className="inputs-container">
                        <div
                            className="profile-img-container"
                            onClick={handleProfileImgClick}
                        >
                            {profileImage ? (
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="profile-img"
                                />
                            ) : (
                                <>
                                    <FaUser className="profile-icon" />
                                    <p>Add Photo</p>
                                </>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                                accept="image/jpeg,image/png"
                            />
                        </div>
                        <div className="input-fields">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Middle Name" />
                            <input type="text" placeholder="Last Name" />
                            <div className="inputs-group gender-birthdate">
                                <p
                                    className="dpHeader gender-header"
                                    onClick={toggleDropdown}
                                    ref={dropdownHeaderRef}
                                >
                                    {selectedGender}
                                    <IoIosArrowDown className="dropdown-icon" />
                                </p>
                                {showDropdown && (
                                    <ul
                                        className="dropdown genderDP"
                                        ref={dropdownRef}
                                    >
                                        <li
                                            className="dp-item"
                                            onClick={() =>
                                                handleDropdownItemClick("Male")
                                            }
                                        >
                                            Male
                                        </li>
                                        <li
                                            className="dp-item"
                                            onClick={() =>
                                                handleDropdownItemClick(
                                                    "Female"
                                                )
                                            }
                                        >
                                            Female
                                        </li>
                                    </ul>
                                )}
                                <input
                                    type="text"
                                    placeholder="Birthday (mm/dd/yyyy)"
                                />
                            </div>
                            <div className="inputs-group program-yrlvl">
                                <input
                                    type="text"
                                    placeholder="Program (ex. BSCE)"
                                />
                                <input type="text" placeholder="Year level" />
                            </div>
                        </div>
                    </div>
                    <button className="submit-button">Submit</button>
                </div>
            </div>
        </>
    );
}

export default SetupProfile;
