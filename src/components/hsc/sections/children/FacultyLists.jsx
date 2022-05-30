import React from "react";

const FacultyLists = ({ image, title, cls }) => {
    return (
        <div class="col mb-4 p-4 d-flex justify-content-center align-items-center">
            <div class={`card h-100 ${cls}`}>
                <div class="sub-img">
                    <img src={image} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                    <h3 class="card-title">{title}</h3>
                </div>
                <div class="card-footer">
                    <a href="" class="btn">
                        See more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FacultyLists;
