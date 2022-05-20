import React from "react";
import avatar from "../../../img/avatar.png";

const TeacherCard = ({ name, subject }) => {
    return (
        <div className="card_wrapper col-6 col-lg-4">
            <div class="card  justify-content-center align-items-center">
                <div className="card_header">
                    <img src={avatar} class="card-img-top" alt="..." />
                </div>
                <div class="card-body px-0">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{subject}</p>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;
