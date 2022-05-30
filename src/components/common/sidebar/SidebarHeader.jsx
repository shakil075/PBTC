import React from "react";
import logo from "../../../img/college.png";

const SidebarHeader = ({ pannel }) => {
    return (
        <div className="sidebar_header">
            <div className="sidebar_logo">
                <img src={logo} alt="pbtc" />
            </div>
            <div className="sidebar_name">{pannel}</div>
        </div>
    );
};

export default SidebarHeader;
