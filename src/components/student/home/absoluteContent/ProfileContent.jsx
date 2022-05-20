import React from "react";
import InfoBox from "./InfoBox";

const ProfileContent = ({ avatar }) => {
    return (
        <div className="profile_content">
            <div className="profile_content_header">
                <div className="header_info">
                    <div className="user_name">
                        Name : <span>Ahsan Shakil</span>
                    </div>
                    <div className="user_roll">
                        Roll Number : <span>150102</span>
                    </div>
                </div>
                <div className="header_img">
                    <img src={avatar} alt="student-image" />
                </div>
            </div>

            <div className="profile_content_body">
                <InfoBox label="Father's Name" value="Wahid Ullah" />
                <InfoBox label="Mother's Name" value="Anwara Begum" />
                <InfoBox label="Date_of_birth" value="21 Feb 1997" />
                <InfoBox label="Phone Number" value="01307373484" />
                <InfoBox rest="mini" label="Religion" value="Islam" />
                <InfoBox rest="mini" label="Gender" value="Male" />
                <InfoBox rest="mini" label="Blood Group" value="O+" />
                <InfoBox
                    rest="long"
                    label="Email"
                    value="shakilahsan45@gmail.com"
                />
                <InfoBox
                    rest="long"
                    label="Address"
                    value="33/7 Bank Town, Savar, Dhaka"
                />
            </div>
        </div>
    );
};

export default ProfileContent;
