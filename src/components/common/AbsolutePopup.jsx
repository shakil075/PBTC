import React from "react";
import CloseBtn from "./CloseBtn";
import "../../css/common/absolutePopup/popup.css";

const AbsolutePopup = ({
    show,
    handleToggle,
    children,
    children2 = null,
    children3 = null,
}) => {
    return (
        <div className={`absolute_popup ${show}`}>
            <div className="popup_wrapper">
                <CloseBtn handleToggle={handleToggle} />

                {children}
            </div>

            {children2}
            {children3}
        </div>
    );
};

export default AbsolutePopup;
