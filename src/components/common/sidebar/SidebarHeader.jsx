import React from "react";
import logo from "../../../img/college.png";

const SidebarHeader = ({ pannel }) => {
    return (
        <div class="sidebar_header">
            <div class="sidebar_logo">
                <img src={logo} alt="pbtc" />
            </div>
            <div class="sidebar_name">{pannel}</div>
        </div>
    );
};

export default SidebarHeader;
