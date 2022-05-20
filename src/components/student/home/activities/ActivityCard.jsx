import React from "react";

const ActivityCard = ({ text }) => {
    return (
        <div class="col-sm-3 col-6 activity_div">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                        <i class="fa-solid fa-trophy"></i>
                    </h5>
                    <p className="activity_title">Football Tournamemt</p>
                    <p class="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;
