import React from "react";

const FacilityLists = ({ title, image, cls }) => {
    return (
        <div class="col-md-6 lab d-flex justify-content-center align-items-center">
            <div class="lab-img">
                <img src={image} alt="" />
            </div>
            <div class={`lab-content ${cls}`}>{title}</div>
        </div>
    );
};

export default FacilityLists;
