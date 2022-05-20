import React from "react";

const EventCard = ({ title, description, date }) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <div className="card_footer">
                    <span>Uploaded at: </span>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
