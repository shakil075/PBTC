import React from "react";

const LabList = ({ lab, image, color }) => {
    return (
        <div class="col mb-4 item">
            <div class="card h-100">
                <div class="sub-img">
                    <img src={image} class="card-img-top" alt="..." />
                </div>
                <div class={`card-body ${color}`}>
                    <h3 class="card-title">{lab}</h3>
                </div>
            </div>
        </div>
    );
};

export default LabList;
