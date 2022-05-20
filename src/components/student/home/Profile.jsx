import React, { useState } from "react";
import avatar from "../../../img/avatar.png";
import AbsolutePopup from "../../common/AbsolutePopup";
import ProfileContent from "./absoluteContent/ProfileContent";
import "../../../css/student/home/profile/profile.css";

const Profile = () => {
    const [show, setShow] = useState("");
    const showProfile = () => {
        setShow("show_profile");
    };
    const handleToggle = () => {
        setShow("");
    };
    return (
        <div class="profile">
            <div class="profile_left">
                <div class="profile_title">Your Profile</div>
                <div class="profile_body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus nesciunt illo vel obcaecati? Amet, debitis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci, rem.
                </div>
                <div class="profile_footer">
                    <button onClick={showProfile} class="profile_btn">
                        View Profile
                    </button>
                </div>
            </div>

            <div class="profile_right">
                <img src={avatar} alt="" />
            </div>

            <AbsolutePopup
                show={show}
                handleToggle={handleToggle}
                children={<ProfileContent avatar={avatar} />}
            />
        </div>
    );
};

export default Profile;
