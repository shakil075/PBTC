import React from "react";
import close from "../../img/icons/close2.png";

const CloseBtn = ({ handleToggle }) => {
    return (
        <div className="close_popup">
            <div onClick={handleToggle} class="toggle_bar">
                <img src={close} alt="close" />
            </div>
        </div>
    );
};

export default CloseBtn;
