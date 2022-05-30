import React from "react";

const AbilityLists = ({ image, title }) => {
    return (
        <div class="col-md-3">
            <div class="ability-content">
                <img src={image} alt="" class="icon" />

                {title === "Developing a Global perspective" ? (
                    <small>
                        Developing a Global <br /> perspective
                    </small>
                ) : (
                    <small>{title}</small>
                )}
            </div>
        </div>
    );
};

export default AbilityLists;
