import React from "react";

const Subject = ({ image, subject }) => {
    return (
        <div class="col-md-3 col-5 box">
            <img src={image} alt="" />
            <h5>{subject}</h5>
        </div>
    );
};

export default Subject;
