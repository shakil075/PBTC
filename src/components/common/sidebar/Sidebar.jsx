import React from "react";
import ToggleBar from "./ToggleBar";
import Lists from "./Lists";
import SideBarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import "../../../css/common/sidebar/sidebar.css";

const Sidebar = ({ setShow, pannel, lists }) => {
    const handleToggle = (e) => {
        const parent = e.target.parentElement.parentElement;
        parent.classList.remove("expand");
    };
    return (
        <div class="side_bar">
            <ToggleBar handleToggle={handleToggle} />
            <SidebarHeader pannel={pannel} />
            <Lists setShow={setShow} lists={lists} />
            <SideBarFooter />
        </div>
    );
};

export default Sidebar;
