import React from "react";
import "../styles/setupProfile.css";
import Navbar from "../Components/navbar";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa";

function SetupProfile() {
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
                        <div className="profile-img-container">
                            <HiMiniPencilSquare className="edit-profileIMG-icon" />
                            <FaUser className="profile-icon" />
                        </div>
                        <div className="input-fields">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Middle Name" />
                            <input type="text" placeholder="Last Name" />
                            <div className="inputs-group gender-birthdate">
                                <p>
                                    Gender
                                    <IoIosArrowDown className="dropdown-icon" />
                                </p>
                                <input
                                    type="text"
                                    placeholder="Birthday (mm/dd/yyyy)"
                                />
                            </div>
                            <div className="inputs-group program-yrlvl">
                                <p>
                                    Program{" "}
                                    <IoIosArrowDown className="dropdown-icon" />
                                </p>
                                <p>
                                    Year Level{" "}
                                    <IoIosArrowDown className="dropdown-icon" />
                                </p>
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
