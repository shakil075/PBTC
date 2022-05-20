import React from "react";

const ContentHeader = () => {
    const handleToggle = (e) => {
        const parent = e.target.parentElement.parentElement.parentElement;
        parent.classList.add("expand");
    };
    return (
        <div class="content_header">
            <div onClick={handleToggle} class="toggle_bar">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="profile_name">Ahsan Shakil</div>
        </div>
    );
};

export default ContentHeader;
