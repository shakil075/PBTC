import React from "react";

const SubjectLists = ({ image, title, cls }) => {
    return (
        <div class="col mb-4 d-flex justify-content-center align-items-center">
            <div class={`card ${cls}`}>
                <div class="sub-img">
                    <img src={image} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                    <h3 class="card-title">{title}</h3>
                </div>
            </div>
        </div>
    );
};

export default SubjectLists;
