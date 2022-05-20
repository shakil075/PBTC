import React from "react";
import close from "../../../img/icons/close2.png";

const ToggleBar = ({ handleToggle }) => {
    return (
        <div onClick={handleToggle} class="toggle_bar">
            <img src={close} alt="close" />
        </div>
    );
};

export default ToggleBar;
